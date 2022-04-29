import "./App.css";
import ColorStick from "./ColorStick";

function App() {
  return (
    <div className="App">
      <ColorStick
        hue={0}
        names={[
          {
            name: "Red",
            palette: [
              { name: "Crimson", hsl: "348,83%,47%" },
              { name: "Blood", hsl: "0,100%,20%" },
              { name: "Maroon", hsl: "0,100%,25%" },
              { name: "White smoke", hsl: "0,100%,96%" },
              { name: "Salmon", hsl: "14,100%,71%" },
              { name: "Pomegranate", hsl: "4,90%,58%" },
              { name: "Tia Maria, Rusty Red", hsl: "14,88%,40%" },
              { name: "Tomato", hsl: "9,100%,64%" },
              { name: "Firebrick, Thunderbird", hsl: "0,68%,42%" },
              { name: "Indian red", hsl: "0,53%,58%" },
              { name: "Pink", hsl: "350,100%,88%" },
            ],
          },
          {
            name: "Orange",
            palette: [
              { name: "Amber, Marigold", hsl: "45,100%,50%" },
              { name: "Peach", hsl: "39,100%,85%" },
              { name: "Sepia", hsl: "30,70%,26%" },
              { name: "Sienna", hsl: "19,56%,40%" },
              { name: "Coral", hsl: "16,100%,66%" },
              { name: "Coffee", hsl: "29,97%,34%" },
              { name: "Roman Coffee, Cocoa", hsl: "16,25%,38%" },
              { name: "Silver", hsl: "16,16%,81%" },
              { name: "Rust", hsl: "18,86%,39%" },
              { name: "Buttermilk", hsl: "45,100%,85%" },
              { name: "Blaze Orange", hsl: "26,100%,50%" },
              { name: "California, Tangerine", hsl: "36,100%,50%" },
              { name: "Trinidad", hsl: "21,100%,45%" },
              { name: "Chocolate, Cinnamon", hsl: "25,75%,47%" },
              { name: "Tan", hsl: "34,44%,69%" },
            ],
          },
          {
            name: "Yellow",
            palette: [
              { name: "Banana", hsl: "51,71%,62%" },
              { name: "Lemon", hsl: "58,100%,50%" },
              { name: "Gold, sunflower yellow", hsl: "51,100%,50%" },
              { name: "Mustard", hsl: "47,100%,67%" },
              { name: "Grose", hsl: "54,100%,62%" },
              { name: "Egg shell/Lemon Chiffon", hsl: "54,100%,88%" },
              { name: "Khaki", hsl: "54,77%,75%" },
              { name: "Olive, Shit green", hsl: "60,100%,25%" },
              { name: "Beige", hsl: "60,56%,91%" },
            ],
          },
          { name: "Lawn green, Chartreuse ", palette: [
            { name: "Chrome White", hsl: "88,51%,86%" },
            { name: "Pistachio", hsl: "96,42%,61%" },
            { name: "Olive drab", hsl: "80,60%,35%" },
            
        
        ] },
        ]}
      />
      <ColorStick
        hue={120}
        names={[
          {
            name: "Green lime",
            palette: [
              { name: "Emerald", hsl: "128,26%,48%" },
              { name: "Fern", hsl: "126,36%,59%" },
              { name: "Fruit Salad", hsl: "122,39%,49%" },
              { name: "Zanah", hsl: "122,37%,84%" },
              { name: "Pine, Parsley", hsl: "124,55%,24%" },
              { name: "Sushi, turtle green", hsl: "88,50%,53%" },
              { name: "Dell, True green", hsl: "103,56%,26%" },
              { name: "Lime pear", hsl: "66,70%,54%" },
              { name: "Hazel", hsl: "54,70%,30%" },
              { name: "Forest green, Tree green", hsl: "120,61%,34%" },
            ],
          },
          { name: "Spring green, Minty green", palette: [
            { name: "Sea green", hsl: "146,50%,36%" },
            { name: "Mint cream", hsl: "150,100%,98%" },
            { name: "Aquamarine", hsl: "160,100%,75%" },
          
          ] },
          {
            name: "Turquoise, Aqua",
            palette: [
              { name: "Jade", hsl: "158,100%,33%" },
              { name: "Robin's Egg Blue", hsl: "187,100%,42%" },
              { name: "Blizzard Blue", hsl: "187,71%,82%" },
              { name: "Petrol/Blue Stone", hsl: "182,100%,20%" },
              { name: "Teal, Persian Green", hsl: "174,100%,29%" },
              { name: "Aqua Island", hsl: "175,41%,79%" },
              { name: "Aqua Deep", hsl: "170,100%,15%" },
              { name: "Light seagreen", hsl: "177,70%,41%" },
            ],
          },
          {
            name: "True Blue",
            palette: [
              { name: "Sapphire", hsl: "216,85%,39%" },
              { name: "Cobalt", hsl: "215,100%,34%" },
              { name: "Azure, Cerulean", hsl: "199,98,48%" },
              { name: "French Pass", hsl: "199,92%,85%" },
              { name: "Peacock blue/Endeavour", hsl: "206,99%,31%" },
              { name: "Cornflower blue", hsl: "219,79%,66%" },
            ],
          },
        ]}
      />
      <ColorStick
        hue={240}
        names={[
          {
            name: "Medium Blue",
            palette: [
              { name: "Iris", hsl: "245,57%,56%" },
              { name: "Midnight blue", hsl: "240,64%,27%" },
              { name: "Dark slate blue", hsl: "248,39%,39%" },
              { name: "Slate blue", hsl: "248,53%,58%" },
              { name: "Lavender", hsl: "240,67%,94%" },
            ],
          },
          {
            name: "Purple",
            palette: [
              { name: "Indigo", hsl: "267,75%,31%" },
              { name: "Amethyst", hsl: "270,50%,60%" },
              { name: "Bluey Purple", hsl: "262,52%,47%" },
              { name: "Light periwinkle", hsl: "261,46%,84%" },
              { name: "Medium orchid", hsl: "288,59%,58%" },
            ],
          },
          {
            name: "Deep Magenta",
            palette: [
              { name: "Lilac", hsl: "300,26%,71%" },
              { name: "Seance", hsl: "291,64%,42%" },
              { name: "Light lavender", hsl: "291,46%,83%" },
              { name: "Orchid", hsl: "302,59%,65%" },
              { name: "Plum", hsl: "300,47%,75%" },
              { name: "Fuchsia", hsl: "300,100%,50%" },
            ],
          },
          {
            name: "Debian Red, Rose",
            palette: [
              { name: "Ruby", hsl: "337,86%,47%" },
              { name: "Amaranth", hsl: "340,82%,52%" },
              { name: "Chantilly", hsl: "339,81%,85%" },
              { name: "Rose Bud Cherry", hsl: "328,81%,29%" },
            ],
          },
        ]}
      />
      <div>Berry websites</div>
      <div>Stone, fruit, veggie, birds. Cucumber, papaya, strawberry, grass, zucchini, grape, cumin, lava, ketchup, mayonnaise, camel, oil , basalt</div>
      <div style={{ display: "flex", gap: "16px", padding: "16px", justifyContent: 'center' }}>
        <a
          href="https://imagecolorpicker.com/en"
          target="_blank"
          rel="noreferrer"
        >
          Image color picker
        </a>
        <a href="http://veli.ee/colorpedia" target="_blank" rel="noreferrer">
          Color pedia
        </a>

        <a href="https://veli.ee/hextriplets" target="_blank" rel="noreferrer">
          Hex Triplets
        </a>

        <a href="https://veli.ee/smartcolors/" target="_blank" rel="noreferrer">
        Smart Colors
        </a>

        <a href="https://kleki.com/" target="_blank" rel="noreferrer">
        Paint with kleki 
        </a>

      </div>
    </div>
  );
}

export default App;
