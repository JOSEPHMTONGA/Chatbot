// Initialize the chatbot with a greeting
function init() {
    let res_elm = document.createElement("div");
    res_elm.innerHTML = "Hello, I am your agriculture chatbot! How can I assist you?";
    res_elm.setAttribute("class", "left");
    document.getElementById('msg').appendChild(res_elm);
}



// Predefined question and answer dataset
const qaDataset = {
    // Planting and Harvesting Seasons
    "What is the best season to plant tomatoes?": "Tomatoes are best planted in early spring after the last frost.",
    "When should I plant carrots?": "Carrots can be planted in early spring or late summer for a fall harvest.",
    "What is the ideal time to plant potatoes?": "Potatoes are best planted in early spring as soon as the soil is workable.",
    "When is the best time to harvest wheat?": "Wheat is typically harvested in the summer, once the heads turn golden and dry.",
    "Which season is suitable for planting beans?": "Beans are best planted in late spring when the soil has warmed up.",
    
    // Crop Diseases and Pests
    "What are the common diseases that affect tomatoes?": "Common diseases include blight, leaf spot, and fusarium wilt.",
    "How can I prevent powdery mildew on my crops?": "Ensure good air circulation, avoid overhead watering, and use fungicides if needed.",
    "What are signs of root rot in plants?": "Signs include wilting, yellow leaves, and mushy roots.",
    "How do I control aphids on my crops?": "Use insecticidal soap, introduce ladybugs, or spray with water to dislodge them.",
    "What is late blight in potatoes?": "Late blight is a fungal disease causing dark spots on leaves and tubers, often in wet conditions.",
    
    // Fertilizers and Soil Preparation
    "What type of fertilizer should I use for corn?": "Corn benefits from nitrogen-rich fertilizers, especially during early growth stages.",
    "How do I improve soil fertility?": "Add organic matter like compost, rotate crops, and consider green manures.",
    "What is the best way to prepare soil for planting?": "Clear weeds, till the soil, add compost, and level the ground before planting.",
    "When should I fertilize my vegetable garden?": "Fertilize at planting and apply additional nutrients as plants grow, especially in the flowering stage.",
    "How can I test my soil's pH?": "Use a soil pH test kit or send a sample to a local agricultural extension service.",
    
    // Irrigation and Watering
    "How much water do tomato plants need?": "Tomato plants need about 1-2 inches of water per week, adjusted for rainfall.",
    "How do I know if I am overwatering my plants?": "Signs of overwatering include yellowing leaves, wilting, and root rot.",
    "What is drip irrigation?": "Drip irrigation delivers water directly to the roots, conserving water and reducing weed growth.",
    "How often should I water my seedlings?": "Water seedlings daily or as needed to keep the soil moist but not waterlogged.",
    "When is the best time of day to water plants?": "Water in the morning to reduce evaporation and minimize disease risk.",
    
    // Crop Varieties and Selection
    "What are the best tomato varieties for a warm climate?": "Heat-tolerant varieties include Heatmaster, Solar Fire, and Phoenix.",
    "Which corn variety is best for sweet corn production?": "Popular varieties include Silver Queen, Peaches and Cream, and Golden Bantam.",
    "What type of beans grow well in tropical regions?": "Tropical regions are ideal for varieties like yard-long beans, lima beans, and black beans.",
    "Which potato varieties are resistant to blight?": "Blight-resistant varieties include Sarpo Mira, Cara, and Valor.",
    "What kind of wheat is best for making bread?": "Hard red wheat is ideal for bread-making due to its high gluten content.",
    
    // Harvesting and Storage
    "How do I know when to harvest carrots?": "Carrots are ready to harvest when they reach 1/2 inch in diameter, usually 70-80 days after planting.",
    "What is the best way to store harvested potatoes?": "Store potatoes in a cool, dark, and dry place to prevent sprouting.",
    "When should I harvest lettuce?": "Lettuce can be harvested when leaves are large enough to eat, typically 6-8 weeks after planting.",
    "How can I tell if my corn is ready to harvest?": "Corn is ready when the kernels are plump, and the silk turns brown.",
    "What is the ideal storage condition for onions?": "Onions should be stored in a cool, dry place with good air circulation.",
    
    // Pest Management
    "How can I prevent pests in my garden?": "Use crop rotation, natural predators, and barriers like netting to reduce pest problems.",
    "What are some natural pest repellents?": "Garlic spray, neem oil, and diatomaceous earth are effective natural pest repellents.",
    "How do I control caterpillars on my crops?": "Handpick caterpillars, use Bacillus thuringiensis (Bt), or introduce parasitic wasps.",
    "What is crop rotation?": "Crop rotation involves changing crop types in each area seasonally to reduce pest and disease buildup.",
    "How can I manage slugs in my garden?": "Use beer traps, copper tape, and remove hiding spots to control slugs.",
    
    // Information About Specific Crops
    "What is maize?": "Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico. It's used as food, fodder, and biofuel.",
    "What are the uses of wheat?": "Wheat is a staple crop used to produce flour for bread, pasta, pastries, and many other foods.",
    "What is millet used for?": "Millet is a small-seeded cereal crop that is drought-resistant and is used for food, animal feed, and alcoholic beverages.",
    "What is rice?": "Rice is a staple food crop grown in flooded fields, primarily in Asia. It is a major food source worldwide.",
    "What is barley?": "Barley is a cereal grain used in animal feed, health foods, and beverages like beer and whisky.",
    "What are the benefits of growing soybeans?": "Soybeans are a high-protein legume used for animal feed, oil, and as a base for various food products like tofu.",
    "What is cassava?": "Cassava is a root crop native to South America, commonly used in tropical regions for food (starch and flour) and animal feed.",
    "What is the significance of peanuts?": "Peanuts are legumes rich in protein, widely used in food products, and as oil crops in tropical regions.",
    "What is the purpose of growing sugarcane?": "Sugarcane is a tropical crop primarily grown for sugar production and biofuel.",
    "What is sorghum?": "Sorghum is a drought-resistant cereal grain used for food, animal feed, and ethanol production.",
    "What is cotton?": "Cotton is a fiber crop used for textile production, grown in warm climates around the world.",
    "What is the main use of potatoes?": "Potatoes are tuber crops used for human food, animal feed, and even as industrial starch sources.",
    "What are sweet potatoes?": "Sweet potatoes are root vegetables rich in vitamins A and C, used in both sweet and savory dishes.",
    "What is alfalfa used for?": "Alfalfa is a legume used as fodder for animals, particularly high in protein.",
    "What is quinoa?": "Quinoa is a high-protein, gluten-free seed native to South America, commonly used as a substitute for grains.",
    "What is the purpose of growing flax?": "Flax is grown for its seeds, used in health foods, and for fiber used in linen production.",
    "What is safflower?": "Safflower is an oilseed crop grown for cooking oil and, sometimes, as a natural dye.",
    "What is canola?": "Canola is an oilseed crop used to produce cooking oil and animal feed, notable for its low saturated fat content.",
    "What is hemp?": "Hemp is grown for its fiber, seeds, and oil, used in textiles, foods, and industrial products."
};

// Function to handle the user's message and generate a response
document.getElementById('reply').addEventListener("click", (e) => {
    e.preventDefault();

    let userMessage = document.getElementById('msg_send').value.trim();
    if (!userMessage) return;

    // Normalize input by removing trailing punctuation and converting to lowercase
    userMessage = userMessage.replace(/[?.,!]*$/, "").toLowerCase();

    // Create user message element
    let userMessageElm = document.createElement('div');
    userMessageElm.innerHTML = userMessage;
    userMessageElm.setAttribute("class", "right");
    document.getElementById('msg').appendChild(userMessageElm);

    // Display "typing..." indicator with animation
    let typingIndicator = document.createElement('div');
    typingIndicator.innerHTML = "<span class='typing-indicator'>typing...</span>";
    typingIndicator.setAttribute("class", "left");
    typingIndicator.setAttribute("id", "typingIndicator");
    document.getElementById('msg').appendChild(typingIndicator);

    // Clear the input field
    document.getElementById('msg_send').value = "";

    // Simulate delay for the response
    setTimeout(() => {
        // Remove the "typing..." indicator
        document.getElementById('typingIndicator').remove();

        // Try to find the question in the dataset (case-insensitive and remove punctuation)
        let foundAnswer = Object.keys(qaDataset).find(q => q.toLowerCase().replace(/[?.,!]*$/, "") === userMessage);
        
        let response;
        if (foundAnswer) {
            response = qaDataset[foundAnswer];
        } else {
            // If question is not in the dataset, ask user to provide an answer
            response = "I don't have an answer for that. Can you provide the answer, and I will remember it for next time?";

            // Temporarily store the question for future updates (example approach)
            qaDataset[userMessage] = "Your provided answer will be stored here.";
        }

        // Create bot response element
        let botMessageElm = document.createElement('div');
        botMessageElm.innerHTML = response;
        botMessageElm.setAttribute("class", "left");
        document.getElementById('msg').appendChild(botMessageElm);

        // Scroll to the latest message
        document.getElementById('msg').scrollTop = document.getElementById('msg').scrollHeight;
    }, 5000); // 5-second delay for "typing..." effect
});