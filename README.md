# Frontend – Inventory Search UI

## 📌 Requirement

The task was to build a simple UI where users can:

* Search products using a text input
* Filter by category (dropdown)
* Apply price range (min & max)
* View results in a list or table
* Show a “No results found” message when nothing matches

Additionally, the search should work with multiple filters and handle edge cases like empty input or invalid price range.

---

## 💡 What I Implemented

I built the UI using React with a focus on simplicity and usability.

* Created a search input for product name (supports partial search)
* Added a category dropdown to avoid invalid user input
* Implemented min and max price filters
* Displayed results using a clean card-based layout
* Handled empty state with a proper “No results found” message
* On initial load, all inventory items are shown (no filters case)

I also added a small validation on the frontend to prevent invalid price ranges before sending the request.

The UI is kept modular by splitting it into reusable components like SearchBar, Filters, and InventoryCard.

---

## ⚡ Search Flow (Frontend)

* User enters filters → clicks search
* Query params are sent to the backend
* Response is rendered as cards
* If no filters → all data is fetched

---

## 🚀 One Improvement (For Large Data)

If the dataset grows, I would implement **pagination or infinite scroll** instead of loading all results at once.

This will reduce load time and improve performance on the UI.
