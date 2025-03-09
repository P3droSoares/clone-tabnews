async function status(request, response) {
  const updateAt = new Date().toISOString();

  return response.status(200).json({
    update_at: updateAt,
  });
}

export default status;
