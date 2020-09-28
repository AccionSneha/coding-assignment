const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');
const swaggerYaml = YAML.load(__dirname + '/swagger.yaml');

module.exports = async (router) => {
    router.use("/docs", swaggerUi.serve);
    router.get(
        "/docs",
        swaggerUi.setup(swaggerYaml, {
            explorer: true
        })
    );
};