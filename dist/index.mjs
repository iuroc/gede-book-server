import express, { Router } from 'express';
import { Book, Magazine } from 'gede-book-api';

function sendRes(res, success, message, data) {
  if (success && !message) message = "\u64CD\u4F5C\u6210\u529F";
  else if (!success && !message) message = "\u64CD\u4F5C\u5931\u8D25";
  res.send({
    success,
    message,
    data
  });
}
const errorHandler = (res, error) => {
  if (error instanceof TypeError) sendRes(res, false, "\u53C2\u6570\u7C7B\u578B\u9519\u8BEF");
  else if (error instanceof Error) sendRes(res, false, error.message);
};
const handlerApi = (router, cls) => {
  Object.getOwnPropertyNames(cls).filter((property) => typeof cls[property] == "function").forEach((property) => {
    const method = async (...args) => cls[property](...args);
    router.get(`/${property}`, (req, res) => {
      try {
        const args = JSON.parse(req.query.args);
        method(...args).then((data) => {
          sendRes(res, true, null, data);
        }).catch((error) => errorHandler(res, error));
      } catch {
        errorHandler(res, new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684 args \u53C2\u6570"));
      }
    });
  });
};

const router$2 = Router();
handlerApi(router$2, Book);

const router$1 = Router();
handlerApi(router$1, Magazine);

const router = Router();
router.use(express.json());
router.use("/book", router$2);
router.use("/magazine", router$1);

export { router as default };
