const search_Meal = () => {
  const query = document.getElementById("searchInput").value.trim();
  const detailsDiv = document.getElementById("detail");
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "";
  detailsDiv.innerHTML = "";

  if (query === "") {
    
    alert("Please enter a search term")
    return;
  }

  fetch_Meals(query);
};

const fetch_Meals = (query) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((response) => {
      if (!response.ok) {
        alert("Network response was not ok")
      }
      return response.json();
    })
    .then((data) => {
      display_meal(data);
    })
    .catch((error) => {
      alert(`Error fetching meal details: ${error.message}`);
    });
};

const display_meal = (data) => {
  const resultDiv = document.getElementById("result");

  if (!data) {
    resultDiv.innerHTML = `<p class='text-danger'>No meals found. Try a different search term.</p>`;
    return;
  }

  data.meals.forEach((meal) => {
    const mealCard = `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
      <div class="card">
        <div class="row g-0">
          <div class="col-5 col-sm-4">
            <img 
              src="${meal.strMealThumb}" 
              class="img-fluid w-100 clickable-image" 
              alt="${meal.strMeal}" 
              data-id="${meal.idMeal}">
          </div>
          <div class="col-7 col-sm-8">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p><strong>Category:</strong> ${meal.strCategory}</p>
              <p><strong>Area:</strong> ${meal.strArea}</p>
              <button class="btn btn-primary">
                <a href="${meal.strYoutube}" target="_blank" style="text-decoration: none; color: white;">
                  Watch on YouTube
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    resultDiv.innerHTML += mealCard;
  });

  
  document.querySelectorAll(".clickable-image").forEach
  ((img) => 
    {
      img.addEventListener
      ( "click", (event) => 
        {
          const mealId = event.target.getAttribute("data-id");
          fetchMealDetails(mealId);
        } 
      );
    } 
  );
};

const fetchMealDetails = (mealId) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((response) => {
      if (!response.ok) {
        alert("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayMealDetails(data.meals[0]);
    })
    .catch((error) => {
      alert(`Error fetching meal details: ${error.message}`);
    });
};

const displayMealDetails = (meal) => {
  const detailDiv = document.getElementById("detail");
  detailDiv.innerHTML = `
    <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="${meal.strMeal}">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Area:</strong> ${meal.strArea}</p>
        <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
        <ul><strong>Ingredients:</strong>
          ${Object.keys(meal)
            .filter((key) =>{
                  return key.startsWith("strIngredient") && meal[key]
               })
            .map( (key) => 
                    `<li>${meal[key]}}</li>`
                )
            .join("")
          }
        </ul>
        <button class="btn btn-secondary" onclick="search_Meal()">Back</button>
      </div>
    </div>
  `;
};

document.getElementById("searchInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    search_Meal();
  }
});
