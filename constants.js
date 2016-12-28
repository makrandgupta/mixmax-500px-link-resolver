function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define('VIDEO_UPLOADED', 'uploaded');
define('VIDEO_PROCESSED', 'processed');
define('VIDEO_REJECTED', 'rejected');
define('VIDEO_FAILED', 'failed');