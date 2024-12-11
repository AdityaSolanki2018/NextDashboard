export async function GET(req, res, next) {
  let users = [
    {
      id: 1,
      name: "hhuifdvi",
      email: "ihfuiwhriufiw@gmail.com",
    },
    {
      id: 2,
      name: "hcuihau",
      email: "rfbiwakb@gmail.com",
    },
  ];
  let data = JSON.stringify(users);
  return new Response(data);
}
