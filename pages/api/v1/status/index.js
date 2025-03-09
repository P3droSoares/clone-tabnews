import database from "infra/database";

async function status(request, response) {
  const updateAt = new Date();

  response.status(200).json({ chave: "Tudo certo!" });
}

export default status;
