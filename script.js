document.getElementById("predictButton").addEventListener("click", function () {
    const color = document.getElementById("color").value;
    const occasion = document.getElementById("occasion").value;
    const season = document.getElementById("season").value;
    let suggestion = "";
    let imagePaths = [];
    if (occasion === "party") {
        if (color === "red")
            {
            suggestion = "Red Blazer with Black Pants";
            imagePaths = ["Red Blazer with Black Pants.jpg"];
        }
        else if (color === "black")
            {
            suggestion = "Classic Black Suit with Tie";
            imagePaths = ["blacksuit party.jpg"];
        }
        else if (color === "blue")
            {
            suggestion = "Nave Blue Suit For Party Wear";
            imagePaths = ["navyblue party.jpg"];
        } 
        else if (color === "green") 
        {
            suggestion = "Green Suit For Party Wear";
            imagePaths = ["green party.webp"];
        }
        else if (color === "yellow")
            {
            suggestion = "Yellow Suit For Party Wear";
            imagePaths = ["YELLOW SUIT PARTY.jpeg"];
        }
        else if (color === "white")
            {
            suggestion = "White Suit For Party Wear";
            imagePaths = ["white suit party.png"];
        } 
        else if (color === "normal shirt")
            {
            suggestion = "Normal Shirt with Slim-Fit Pants for Party";
            imagePaths = [
                "party1.webp",
                "party2.jpg",
                "party3.jpg",
                "party4.jpg"
            ];
        } else {
            suggestion = `${color.charAt(0).toUpperCase() + color.slice(1)} Shirt with Slim-Fit Pants`;
            imagePaths = [`images/${color}-party-shirt.jpg`];
        }
    }else if(occasion === "tradition")
        {
        if(color==="red")
            {
            suggestion="Traditional Wear For Red Color";
            imagePaths=["traditional.red.png"];
        }
        else if(color==="black")
            {
            suggestion="Traditional Wear For Black Color";
            imagePaths=["black.tradition.png"];
        }
        else if(color==="blue")
            {
            suggestion="Traditional Wear For Blue Color";
            imagePaths=["blue.tradition.png"];
        }
        else if(color==="green")
            {
            suggestion="Traditional Wear For Green Color";
            imagePaths=["green.tradition.png"];
        }
        else if(color==="yellow")
            {
            suggestion="Traditional Wear For Yellow Color";
            imagePaths=["yellow.tradition.png"];
        }
        else if(color==="white")
            {
            suggestion="Traditional Wear For White Color";
            imagePaths=["white.tradition.png"];
        }
        else if(color==="normal shirt")
        {
            suggestion="Traditional Wear With Normal Shirt";
            imagePaths=
            [
                "normal1.tradition.png",
                "normal2.tradition.png"
            ];
        }
    } 
    else if (occasion === "formal")
        {
        if(season === "winter")
            {
            if (color === "red")
            {
                suggestion = "Red Colour For Formal Wear";
                imagePaths = ["red casual.jpg"];
            }
            else if (color === "black")
            {
                suggestion = "Black Colour For Formal Wear";
                imagePaths = ["black casual.webp"];
            }
            else if (color === "blue")
            {
                suggestion = "Blue Colour For Formal Wear";
                imagePaths = ["blue casual.webp"];
            }
            else if (color === "green")
            {
                suggestion = "Green Colour For Formal Wear";
                imagePaths = ["green casual.png"];
            } 
            else if (color === "yellow")
            {
                suggestion = "Yellow Colour For Formal Wear";
                imagePaths = ["yellow casual.png"];
            } 
            else if (color === "white")
            {
                suggestion = "White Colour For Formal Wear";
                imagePaths = ["white casual.png"];
            }

        } 
        else if (season === "summer")
            {
            if(color === "red")
            {
                suggestion ="Red Color For Summer Season";
                imagePaths=["red.summer.png"];
            } 
            else if(color === "black")
                {
                suggestion ="Black Color For Summer Season";
                imagePaths=["black.summer.png"];
            } 
            else if(color === "blue")
                {
                suggestion ="Blue Color For Summer Season";
                imagePaths=["blue.summer.png"];
            } 
            else if(color === "green")
                {
                suggestion ="Green Color For Summer Season";
                imagePaths=["green.summer.jpg"];
            }
            else if(color === "yellow")
                {
                suggestion ="Yellow Color For Summer Season";
                imagePaths=["yellow.summer.png"];
            }
            else if(color === "white")
                {
                suggestion ="White Color For Summer Season";
                imagePaths=["White.summer.png"];
            }
            else if(color==="normal shirt")
                {
                suggestion="Normal Color For Summer Season";
                imagePaths=
                [
                    "normal.summer1.png",
                    "normal.summer2.png",
                    "normal.summer3.png"
                ];
            }
        } else {
            suggestion = `${color.charAt(0).toUpperCase() + color.slice(1)} Hoodie with Jeans`;
            if(color==="red")
            {
                suggestion="Hoodie With Red Color";
                imagePaths=["hoodies.red.png"];
            }
            else if(color==="black")
            {
                suggestion="Hoodie With Black Color";
                imagePaths=["hoodies.black.png"];
            }
            else if(color==="blue")
            {
                suggestion="Hoodie With Blue Color";
                imagePaths=["hoodies.blue.png"];
            }
            else if(color==="green")
            {
                suggestion="Hoodies with green color";
                imagePaths=["hoodies.green.png"];
            }
            else if(color==="yellow")
            {
                suggestion="Hoodies With Yellow Color";
                imagePaths=["hoodies.yellow.png"];
            }
            else if(color==="white")
            {
                suggestion="Hoodies With White Color";
                imagePaths=["hoodies.white.png"];
            }
        }
    }
    // Append season info
    suggestion += ` (Best for ${season.charAt(0).toUpperCase() + season.slice(1)} Season)`;

    // Display suggestion
    document.getElementById("dressSuggestion").textContent = suggestion;

    // Update images
    const dressImageContainer = document.getElementById("dressImageContainer"); // Container for multiple images
    dressImageContainer.innerHTML = ""; // Clear previous images

    if (imagePaths.length > 0) {
        imagePaths.forEach((path) => {
            const img = document.createElement("img");
            img.src = path;
            img.alt = suggestion;
            img.style.maxWidth = "100%";
            img.style.margin = "10px 0";
            dressImageContainer.appendChild(img);
        });
    } else {
        dressImageContainer.innerHTML = "<p>No image available</p>";
    }
});