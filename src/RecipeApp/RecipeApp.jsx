import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import useViewModel from "./ViewModel";

function RecipeApp() {
  const {
    handleAddRecipe,
    handleDeleteRecipe,
    handleEditRecipe,
    handleRecipeIngredientsChange,
    handleRecipeNameChange,
    handleSelectRecipe,
    recipeIngredients,
    recipeName,
    recipes,
    selectedRecipeId,
  } = useViewModel();

  return (
    <Grid container sx={{ p: 2 }}>
      <Grid item xs={12} sm={6} sx={{ p: 2, border: "1px solid black" }}>
        <TextField
          label="Recipe Name"
          value={recipeName}
          onChange={handleRecipeNameChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Ingredients"
          value={recipeIngredients}
          onChange={handleRecipeIngredientsChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        {selectedRecipeId ? (
          <Button
            onClick={handleEditRecipe}
            variant="contained"
            color="primary"
          >
            Edit Recepy
          </Button>
        ) : (
          <Button onClick={handleAddRecipe} variant="contained" color="primary">
            Add Recepy
          </Button>
        )}
      </Grid>
      <Grid item xs={12} sm={6} rowSpacing={2} sx={{ p: 2 }}>
        {recipes.map((recipe) => (
          <Box key={recipe.id} sx={{ p: 1, m: 1, border: "solid gray" }}>
            <Typography variant="h6">{recipe.name}</Typography>
            <Typography>{recipe.ingredients}</Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                onClick={() => handleSelectRecipe(recipe.id)}
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDeleteRecipe(recipe.id)}
                variant="contained"
                color="error"
              >
                Delete
              </Button>
            </Stack>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}

export default RecipeApp;
