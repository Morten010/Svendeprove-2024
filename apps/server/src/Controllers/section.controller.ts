import { QueryParamsHandle } from "../Middleware/helpers.js";
import Section from "../Models/section.model.js";
import Category from "../Models/category.model.js";
import Type from "../Models/type.model.js";
import CategoryTypeRel from "../Models/category_type_rel.model.js";
import { Sequelize } from "sequelize";

// Definerer category relationer
Section.hasMany(Category);
Category.belongsTo(Section);

// Definerer types relationer
Type.belongsToMany(Category, { through: CategoryTypeRel });
Category.belongsToMany(Type, { through: CategoryTypeRel });

class SectionController {
  /**
   * List Metode - henter alle records
   * @param {object} req
   * @param {object} res
   * @return {array} Returnerer JSON array
   */
  list = async (req: any, res: any) => {
    // Sortering & constaints
    const qp: any = QueryParamsHandle(req, "id, title, color, filename");
    // Vars til at styre joins i output
    const { incl_categories, incl_types } = req.query;

    // Deklarerer array med section table joins
    const arrIncludes = [];

    // Hvis categories er true
    if (incl_categories) {
      // Deklarerer array med category table joins
      const arrCatIncludes = [];

      // Hvis types er true
      if (incl_types) {
        // Deklarerer array med types table joins
        arrCatIncludes.push({
          model: Type,
          attributes: ["id", "title"],
          through: {
            attributes: ["is_allowed", "is_station", "is_home"],
            as: "rules",
          },
        });
      }

      // Samler join array
      arrIncludes.push({
        model: Category,
        attributes: [
          "title",
          "icon_filename",
          [
            Sequelize.fn(
              "CONCAT",
              "http://localhost:3000/Assets/Images/Guide/Icons/",
              Sequelize.col("icon_filename"),
            ),
            "icon_filepath",
          ],
          "image_filename",
          [
            Sequelize.fn(
              "CONCAT",
              "http://localhost:3000/Assets/Images/Guide/Categories/",
              Sequelize.col("image_filename"),
            ),
            "image_filepath",
          ],
        ],
        include: arrCatIncludes,
      });
    }

    try {
      // Kalder SQ model
      const result = await Section.findAll({
        order: [qp.sort_key],
        limit: qp.limit,
        attributes: [
          "id",
          "title",
          "color",
          "filename",
          [
            Sequelize.fn(
              "CONCAT",
              "http://localhost:3000/Assets/Images/Guide/Categories/",
              Sequelize.col("filename"),
            ),
            "filepath",
          ],
        ],
        // @ts-ignore
        include: arrIncludes,
      });
      // Parser resultat som json
      res.json(result);
    } catch (err) {
      res.status(418).send({
        message: `Unable to list records: ${err}`,
      });
    }
  };

  /**
   * GET Metode henter record ud fra id
   * @param {object} req
   * @param {object} res
   * @return {object} Returnerer JSON object med detaljer
   */
  details = async (req: any, res: any) => {
    const { id } = req.params;

    if (id) {
      // Sætter resultat efter sq metode
      try {
        const result = await Section.findOne({
          attributes: [
            "id",
            "title",
            "description",
            "color",
            "filename",
            [
              Sequelize.fn(
                "CONCAT",
                "http://localhost:3000/Assets/Images/Guide/Categories/",
                Sequelize.col("filename"),
              ),
              "filepath",
            ],
            "created_at",
            "updated_at",
          ],
          include: {
            model: Category,
            attributes: [
              "id",
              "title",
              "icon_filename",
              [
                Sequelize.fn(
                  "CONCAT",
                  "http://localhost:3000/Assets/Images/Guide/Icons/",
                  Sequelize.col("icon_filename"),
                ),
                "icon_filepath",
              ],
              "image_filename",
              [
                Sequelize.fn(
                  "CONCAT",
                  "http://localhost:3000/Assets/Images/Guide/Categories/",
                  Sequelize.col("image_filename"),
                ),
                "image_filepath",
              ],
            ],
          },
          // Where clause
          where: { id: req.params.id },
        });
        // Parser resultat som json
        res.json(result);
      } catch (error) {
        res.status(403).send({
          message: `Something went wrong: ${error}`,
        });
      }
    } else {
      res.status(403).send({
        message: "Wrong parameter values",
      });
    }
  };

  /**
   * Create Metode - opretter nyt event
   * @param {object} req Request Object
   * @param {object} res Response Object
   * @return {number} Returnerer nyt id
   */
  create = async (req: any, res: any) => {
    const { title, description, color, image_id } = req.body;

    if (title && description && color && image_id) {
      try {
        const model: any = await Section.create(req.body);
        return res.json({
          message: `Record created`,
          newId: model.id,
        });
      } catch (error) {
        res.status(403).send({
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
   * Update Metode - opdaterer event
   * @param {object} req Request Object
   * @param {object} res Response Object
   */
  update = async (req: any, res: any) => {
    const { id } = req.params;
    const { title, description, color, image_id } = req.body;

    if (id) {
      try {
        const model = await Section.update(req.body, {
          where: { id: id },
        });
        return res.json({
          message: `Record updated`,
        });
      } catch (error) {
        res.status(403).send({
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
   * Delete Metode - sletter bruger ud fra id i url parameter
   * @param {object} req Request Object
   * @param {object} res Response Object
   */
  remove = async (req: any, res: any) => {
    const { id } = req.params.id;

    if (id) {
      try {
        await Section.destroy({
          where: { id: id },
        });
        res.sendStatus(200);
      } catch (err) {
        res.status(418).send({
          message: `Could not delete record: ${err}`,
        });
      }
    } else {
      res.status(403).send({
        message: "Wrong parameter values",
      });
    }
  };
}

export default SectionController;
