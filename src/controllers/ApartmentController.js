import ApartmentModel from "../models";
import { serverError } from "../utilities/Error";
import { successResponse } from "../utilities/Success";

/**
 * Class representing the User controller
 * @class ApartmentController
 * @description Apartment controller
 */
class ApartmentController {
  /**
   * Add Apartment
   * @param {object} req - Request object
   * @param {object} res - Request object
   * @returns {object} Response object
   */
  static async addApartment(req, res) {
    ApartmentModel.create(req.body, (err, data) => {
      if (err) {
        serverError(500, err.message, res);
      } else {
        successResponse(200, data, res);
      }
    });
  }
}

export default ApartmentController;
