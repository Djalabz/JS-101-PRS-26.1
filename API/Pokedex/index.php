<!DOCTYPE html>
<html lang="en">
<head>
    <title>Product List</title>
    <script>
        fetch("https://api.example.com/products")
            .then(response => response.json())
            .then(data => {
                let container = document.getElementById("products");
                data.forEach(product => {
                    let item = document.createElement("div");
                    item.innerHTML = `<h2>${product.name}</h2><p>Price: $${product.price}</p>`;
                    container.appendChild(item);
                });
            });
    </script>
</head>
<body>
    <h1>Available Products</h1>
    <div id="products"></div>
</body>
</html>

<?php
// Get JSON data from request
$json = file_get_contents("php://input");

// Decode JSON to PHP array
$products = json_decode($json, true);

// Example: Save to database (PDO)
$pdo = new PDO("mysql:host=localhost;dbname=eshop", "user", "password");
foreach ($products as $product) {
    $stmt = $pdo->prepare("INSERT INTO products (name, price) VALUES (:name, :price)");
    $stmt->execute([
        ":name" => $product["name"],
        ":price" => $product["price"]
    ]);
}

echo "Products saved!";
?>