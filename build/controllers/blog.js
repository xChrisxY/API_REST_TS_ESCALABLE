"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.postBlog = exports.getBlogs = exports.getBlog = void 0;
const error_handle_1 = require("../utils/error.handle");
// Orquestación entre infraestructura y lógica de negocio
// Los controladores solo deben enterarse de las cosas que vienen de http
// Es decir del Request y del Response, de recibir y responder algo
// NO debe saber de lógica de negocio
const getBlog = (req, res) => {
    try {
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_Blog');
    }
};
exports.getBlog = getBlog;
const postBlog = (req, res) => {
    try {
        const { body } = req;
        res.status(200).send(body);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERRR_POST_BlOGS');
    }
};
exports.postBlog = postBlog;
const getBlogs = (req, res) => {
    try {
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_BLOGS');
    }
};
exports.getBlogs = getBlogs;
const updateBlog = (req, res) => {
    try {
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATE_Blog');
    }
};
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => {
    try {
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_Blog');
    }
};
exports.deleteBlog = deleteBlog;
