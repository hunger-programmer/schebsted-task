const fs = require('fs');
const express = require('express');
const { checkSchema, validationResult } = require('express-validator/check');
const uuidv4 = require('uuid/v4');

const statusSaga = require('../../../server/services/statusSaga');
const urlVideoIndexExtract = require('../../../server/services/urlVideoIndexExtractor');
const { VIDEO_STATUSES } = require('../../../config');

const videoSchema = require('../../validator/videoSchema');

const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile(`${__dirname}/../../../videos.json`, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.json(JSON.parse(data));
  });
});

router.post('/', checkSchema(videoSchema), async (req, res) => {
  const errors = validationResult(req).array();
  if (errors.length) {
    res.status(400).json(validationResult(req).array());

    return;
  }

  fs.readFile(`${__dirname}/../../../videos.json`, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    const videos = JSON.parse(data);

    videos.push({ ...req.body, url: urlVideoIndexExtract(req.body.url), id: uuidv4() });

    fs.writeFile(`${__dirname}/../../../videos.json`, JSON.stringify(videos), (writeError) => {
      if (writeError) {
        throw writeError;
      }

      res.json(videos);
    });
  });
});

router.patch('/:id/status', (req, res) => {
  fs.readFile(`${__dirname}/../../../videos.json`, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    if (VIDEO_STATUSES.indexOf(req.body.status) < 0) {
      res.status(400).json({ reason: 'Wrong status provided' });
      return;
    }

    const videos = JSON.parse(data);
    let statusCheck = true;
    const changeStatusCallback = (video) => {
      if (video.id === req.params.id) {
        if (statusSaga[video.status] !== req.body.status) {
          statusCheck = false;
          return;
        }

        video.status = req.body.status;

        return false;
      }
    };

    videos.forEach(changeStatusCallback);

    if (!statusCheck) {
      res.status(400).json({ reason: 'Wrong status provided' });
      return;
    }

    fs.writeFile(`${__dirname}/../../../videos.json`, JSON.stringify(videos), (writeError) => {
      if (writeError) {
        throw writeError;
      }

      res.json({ id: req.params.id, status: req.body.status });
    });
  });
});

module.exports = router;
