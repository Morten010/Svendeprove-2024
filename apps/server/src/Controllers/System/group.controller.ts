import Group from "../../Models/System/group.model.js";
import { QueryParamsHandle } from "../../Middleware/helpers.js";

/**
 * Controller for UserGroup Actions
 */
class GroupController {
  /**
   * Method List
   * @param {Object} req Express Request Object
   * @param {Object} res Express Response Object
   */
  list = async (req: any, res: any) => {
    // Indhenter parametre fra request objekt
    const qp: any = QueryParamsHandle(req, "id, name");

    try {
      // Eksekverer sequelize metode med management values
      const result = await Group.findAll({
        attributes: qp.attributes,
        order: [qp.sort_key],
        limit: qp.limit,
      });
      // Udskriver resultat i json format
      res.json(result);
    } catch (error) {
      res.status(418).send({
        message: `Could not get group list: ${error}`,
      });
    }
  };

  /**
   * Method Details
   * @param {Object} req Express Request Object
   * @param {Object} res Express Response Object
   */
  details = async (req: any, res: any) => {
    // Destructure assignment af id.
    const { id } = req.params || 0;

    if (id) {
      try {
        // Eksekverer sequelize metode med attributter og where clause
        const result = await Group.findOne({
          attributes: [
            "id",
            "name",
            "description",
            "is_active",
            "createdAt",
            "updatedAt",
          ],
          where: { id: id },
        });
        // Udskriver resultat i json format
        res.json(result);
      } catch (error) {
        res.status(418).send({
          message: `Could not get group details: ${error}`,
        });
      }
    } else {
      res.status(403).send({
        message: "Wrong parameter values",
      });
    }
  };

  /**
   * Method Create
   * @param {Object} req Express Request Object
   * @param {Object} res Express Response Object
   */
  create = async (req: any, res: any) => {
    // Destructure assignment af form data fra request body
    const { name, description, is_active } = req.body;
    // Tjekker felt data
    if (name && description && is_active) {
      try {
        // Opretter record
        const model: any = await Group.create(req.body);
        // Sender nyt id som json object
        res.json({
          message: `Record created`,
          newId: model.id,
        });
      } catch (error) {
        res.status(418).send({
          message: `Could not create record: ${error}`,
        });
      }
    } else {
      res.status(403).send({
        message: "Wrong parameter values",
      });
    }
  };

  /**
   * Method Update
   * @param {*} req
   * @param {*} res
   */
  update = async (req: any, res: any) => {
    // Destructure assignment af id.
    const { id } = req.params || 0;
    // Destructure assignment af form data fra request body
    const { name, description, is_active } = req.body;
    // Tjekker felt data
    if (id && name && description && is_active) {
      try {
        // Opretter record
        const model = await Group.update(req.body, {
          where: { id: id },
        });
        // Sender nyt id som json object
        res.json({
          message: "Record updated",
        });
      } catch (error) {
        res.status(418).send({
          message: `Could not update record: ${error}`,
        });
      }
    } else {
      res.status(403).send({
        message: "Wrong parameter values",
      });
    }
  };

  /**
   * Method Remove
   * @param {object} req Request Object
   * @param {object} res Response Object
   */
  remove = async (req: any, res: any) => {
    const { id } = req.body;

    if (id) {
      try {
        await Group.destroy({
          where: { id: id },
        });
        res.status(200).send({
          message: `Record deleted`,
        });
      } catch (error) {
        res.status(418).send({
          message: `Could not delete record: ${error}`,
        });
      }
    } else {
      res.status(403).send({
        message: "Wrong parameter values",
      });
    }
  };
}

export default GroupController;
