/**
 * Created by andywalpole on 26/02/15.
 */

'use strict';

var gfeed = require('google-feed-api');
var _ = require('underscore');
var q = require('q');
var Blog = require('../routes/models/blog_model');
var moment = require('moment');
var fs = require('fs');
var async = require('async');

var _sortOldBlogPosts;
var _totalArticlesCount;
var _seoFriendly;
var _addReviewImage;
var _newBlogPosts;
var _mergeBlogPosts;
var _closeBlogComments;
var _promise_with_array;
var _grab_old_blog_posts;

/**
 * Simple getter setter cache class
 * @constructor
 */

class BlogCacheClass {

  get cache() {
    return this.value;
  }

  set cache(val) {
    this.value = val;
  }
}

var OldBlogPosts = new BlogCacheClass();
var OldBlogPostTotal = new BlogCacheClass();

var createJSONFile = function () {

  if (OldBlogPosts.cache) {

    fs.writeFile('./server/blogposts.json', OldBlogPosts.cache, function (err) {
      if (err) {
        throw new Error(err);
      }
    });

  }

};

createJSONFile();

/**
 *
 * @constructor
 */

var RSSClass = function () {

  /** Set defaults
   * Will come in handy to use later for getters setters or other requirements if needed
   * **/

  Object.defineProperties(this, {
    'blogs': {
      value: {},
      writable: true,
      enumerable: true
    },
    'totalNewArticles': {
      value: null,
      writable: true,
      enumerable: true
    }
  });

  Object.defineProperties(this.blogs, {
    'totalArticles': {
      value: null,
      writable: true,
      enumerable: true
    },
    'BlogPosts': {
      value: null,
      writable: true,
      enumerable: true
    }
  });

  /**
   * 1. Create the right date format
   * 2. Using the date create a unique ID for the blog post which is used in the URL
   * @type {function(this:RSSClass)|*|Function}
   * @private
   */
  _sortOldBlogPosts = function (data) {

    var posts = data;

    Object.keys(posts).forEach(function (key) {

      if (posts[key].publishedDate) {

        var newDate;

        if (posts[key].publishedDate.match(/[a-zA-Z]/g)) {

          newDate = moment(posts[key].publishedDate).valueOf();

        } else {

          newDate = posts[key].publishedDate;

        }

        // use moment().valueOf() so that the value is in milliseconds
        // the inbuilt angular filter date will format it to something easily understood
        posts[key].publishedDate = newDate.toString();

        // create a unique ID from the date which is used in the URL
        // when the individual blog post is loaded it is used to retrieve
        // the item from the article data array
        posts[key].uniqueId = newDate.toString().substring(0, 6);

      }

    });

    return posts;

  }.bind(this);

  /**
   * Count the total number of blog posts
   * @type {function(this:RSSClass)|*|Function}
   * @private
   */
  _totalArticlesCount = function () {

    this.blogs.totalArticles = this.totalOldArticles + this.totalNewArticles;

    // new pass in the promise the blog posts ready to send to the browser
    return this.blogs;

  }.bind(this);

  /**
   * create SEO friendly URL from title and add it to the scope
   * @type {function(this:RSSClass)|*|Function}
   * @private
   */
  _seoFriendly = function (data) {

    // in this array are a liist of stopwords which have less SEO value
    var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

    var oldPosts = data;
    var regexNonAlphaNum = /[^\-a-z0-9]/g;
    var regexWhiteSpace = /\s/gi;
    var x;
    var l;
    var newTitle;

    Object.keys(oldPosts).forEach(function (key) {

      if (oldPosts[key].title) {

        // initially remove hyphens and the white space to their right
        newTitle = oldPosts[key].title.replace(/\–\s/g, '').toLowerCase();

        x = 0;
        l = stopwords.length;

        // loop through the SEO watch words and replace with white space hyphen
        do {

          var regEx = new RegExp('\\b\\s' + stopwords[x] + '\\s\\b', 'g');
          var regExTwo = new RegExp('^' + stopwords[x] + '\\s\\b');

          newTitle = newTitle.replace(regEx, '-').trim().replace(regExTwo, '');

          x += 1;

        } while (x < l);

        // remove white space and replace with hythen
        newTitle = newTitle.replace(regexWhiteSpace, '-');
        // remove all non-alpha numeric characters
        newTitle = newTitle.replace(regexNonAlphaNum, '');

        // now there is an SEO friendly URN fragment available for use
        oldPosts[key].url = newTitle;

      }

    });

    return oldPosts;

  }.bind(this);

  /**
   * these are the images that appear at the top of every blog post
   * at the time of writing there are ten different images
   * @type {function(this:RSSClass)|*|Function}
   * @private
   */
  _addReviewImage = function () {

    var oldPosts = this.blogs.BlogPosts;
    var numImages = _.size(this.BLOG);
    var imageArray = _.toArray(this.BLOG);

    var x = -1;

    Object.keys(oldPosts).forEach(function (key) {

      if (x === (numImages - 1)) {
        x = -1;
      }

      if (!oldPosts[key].displayImage) {

        oldPosts[key].displayImage = imageArray[(x += 1)];

      }

    });

    this.blogs.BlogPosts = oldPosts;

  }.bind(this);

  /**
   * Retrieve all new blog posts and pass on in the function promise
   * @type {function(this:RSSClass)|*|Function}
   * @private
   */
  _newBlogPosts = function (callback) {

    // use mongoose to get all blogs in the database
    Blog.find(function (err, blogs) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        throw new Error(err);
      }

      this.totalNewArticles = _.size(blogs);

      callback(blogs);

    }.bind(this));

  }.bind(this);


  /**
   * Merge old and new posts. This is what will be provided to teh frontend
   * @type {function(this:RSSClass)|*|Function}
   * @private
   */
  _mergeBlogPosts = function (data) {

    this.blogs.BlogPosts = _.union(data, this.oldBlogPosts);

  }.bind(this);

  /**
   * For old blog posts taken from Suburban Glory keep comments closed
   * @type {function(this:RSSClass)|*|Function}
   * @private
   */

  _closeBlogComments = function (data) {

    Object.defineProperty(this, 'totalOldArticles', {
      value: _.size(data),
      writable: true,
      configurable: true,
      enumerable: true
    });

    Object.defineProperty(this, 'oldBlogPosts', {
      value: data,
      writable: true,
      configurable: true,
      enumerable: true
    });

    var oldPosts = this.oldBlogPosts;

    Object.keys(oldPosts).forEach(function (key) {

      oldPosts[key].commentsOpen = false;

    });

    return {};

  }.bind(this);


  /**
   *
   * @param anArray
   * @returns {*}
   * @private
   */

  _promise_with_array = function (anArray) {

    var returnedArray = [];
    var get_an_array;

    anArray.forEach(function (firstResult) {

      get_an_array(firstResult, function (secondResult) {
        returnedArray.push(secondResult);
      });

    });

    return returnedArray;
  };

  /**
   *
   * @type {function(this:RSSClass)|*|Function}
   * @private
   */

  _grab_old_blog_posts = function (url) {

    var deferred = q.defer();

    var feed = new gfeed.Feed(url);

    feed.setNumEntries(50);

    feed.load(function (data) {

      /** After retrieving data using Google RSS API store it into the cache and count number of old blog posts
       * **/
      if (data.error || !data) {
        deferred.reject(new Error('Error fetching feeds'));
      }

      deferred.resolve(data.feed.entries);

    }.bind(this));

    return deferred.promise;

  }.bind(this);

};

/** If the old blog posts are cached the just run the functions used for the new blog posts
 * **/

RSSClass.prototype.blogItems = function (callback) {

  // retrieve the cache
  this.oldBlogPosts = JSON.parse(OldBlogPosts.cache);
  this.totalOldArticles = JSON.parse(OldBlogPostTotal.cache);

  async.waterfall([
    function (callback) {

      _newBlogPosts(function (returnedData) {

        _mergeBlogPosts(returnedData);
        _addReviewImage();
        callback(null, returnedData);

      });

    },
    function (arg1, callback) {

      callback(null, _totalArticlesCount());

    }
  ], function (err, result) {

    if (err) {
      res.send(err);
    }

    console.dir(result);

    callback(result);
  });

};

RSSClass.prototype.parseFeed = function (url, callback) {

  var _this = this;

  _grab_old_blog_posts(url).then(function (posts) {

    async.waterfall([

      function (callback) {

        callback(null, _sortOldBlogPosts(posts));

      },
      function (arg1, callback) {

        callback(null, _seoFriendly(arg1));

      },
      function (arg1, callback) {

        callback(null, _closeBlogComments(arg1));

      }
    ], function (err) {

      if (err) {
        res.send(err);
      }

      async.waterfall([

        function (callback) {

          _newBlogPosts(function (returnedData) {

            _mergeBlogPosts(returnedData);
            _addReviewImage();
            callback(null, returnedData);

          });

        },
        function (arg1, callback) {

          callback(null, _totalArticlesCount());

        }
      ], function (err, result) {

        if (err) {
          res.send(err);
        }

        // set cache here
        // cache old RSS feed and data
        OldBlogPosts.cache = JSON.stringify(_this.oldBlogPosts);
        OldBlogPostTotal.cache = JSON.stringify(_this.totalOldArticles);

        callback(result);

      });

    });

  });

};

module.exports = function (app) {

  app.get('/api/oldBlog/get', function (req, res) {

    var OldBlogFeed = new RSSClass();

    Object.defineProperties(OldBlogFeed, {
      'RSSFeed': {
        value: req.query.RSSFeed
      },
      'BLOG': {
        value: JSON.parse(req.query.BLOG)
      }
    });

    fs.exists('./server/blogposts.json', function (exists) {

      if (!exists) {
        createJSONFile();
      }

    });

    // if oldBlogPosts are in the cache then don't use the parseFeed method
    // just retrieve them from the cache
    if (OldBlogPosts.cache && OldBlogPostTotal.cache) {

      OldBlogFeed.blogItems(function (data) {

        res.json(data);

      });

    } else {

      OldBlogFeed.parseFeed(OldBlogFeed.RSSFeed, function (data) {

        res.json(data);

      });

    }
  });

};
