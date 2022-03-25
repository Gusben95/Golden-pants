export default function Menu() {
  // https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu

  // get coffee menu [array] by fetch
  async function getMenu() {
    let response = await fetch(
      "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu"
    );
    let data = response.json();

    console.log(data);
  }
  getMenu();

  return (
    <section>
      <h1>This is where the menu will be</h1>
    </section>
  );
}
