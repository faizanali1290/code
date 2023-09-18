const { Router } = require("express");
const multer = require("multer");
const {
  createAttachemnt,
  createAttachemnts,
} = require("../Contollers/createAttachemnt.post");
const {
  multiplePost,
  profilePath,
} = require("../AttachmentPath/attachmentpath.profiel");

const BaseRouter = Router();

BaseRouter.post("/img", profilePath, createAttachemnt);
BaseRouter.post("/imgs", multiplePost, createAttachemnts);

module.exports = BaseRouter;
