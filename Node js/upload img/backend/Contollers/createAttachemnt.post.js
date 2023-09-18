const attachemntmodel = require("../sechmas/attachment.scema");

const createAttachemnt = async (req, resp) => {
  const { filename, fieldname, pathname, mimetype, encoding, size } =
    req.file;
    const f=Number.parseInt(size)/1024/1024/1024+'MB'

  const attachment = new  attachemntmodel({
    filename,
    fieldname,
    pathname,
    mimetype,
    size:f,
    encoding,
  });
  await attachment.save();
  return resp.send(req.file);
};

const createAttachemnts = async (req, resp) => {
  const files = req.files;
  let a = [];
  for (let i of files) {
    
    a.push(i);

    resp.json({ a });
  }
};

module.exports = { createAttachemnts, createAttachemnt };
