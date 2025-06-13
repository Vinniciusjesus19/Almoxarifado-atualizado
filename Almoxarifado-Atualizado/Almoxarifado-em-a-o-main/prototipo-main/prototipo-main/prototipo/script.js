!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Gestão de Estoque</title>
    <!--
        Basic CSS for styling the inventory management system.
        It uses a clean, modern design with responsive considerations.
    -->
    <style>
        /* General body styling */
        body {
            font-family: 'Inter', sans-serif; /* Using Inter font as per instructions */
            margin: 0;
            padding: 20px;
            background-color: #eef2f6; /* Light gray background */
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
        }

        /* Main container for the application */
        .container {
            max-width: 960px; /* Slightly wider container for better table display */
            width: 100%;
            background-color: #ffffff; /* White background for the main content */
            padding: 30px;
            border-radius: 12px; /* More rounded corners */
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); /* Softer, more pronounced shadow */
            box-sizing: border-box; /* Include padding in element's total width and height */
        }

        /* Headings styling */
        h1, h2 {
            text-align: center;
            color: #2c3e50; /* Darker blue-gray for headings */
            margin-bottom: 25px;
            font-weight: 600; /* Slightly bolder headings */
        }

        /* Form styling */
        form {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive grid for inputs */
            gap: 20px; /* Increased gap between form elements */
            margin-bottom: 40px;
            padding: 25px;
            border: 1px solid #dcdfe6; /* Lighter border for the form */
            border-radius: 10px; /* Rounded corners for the form box */
            background-color: #fcfdfe; /* Very light background for the form */
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05); /* Inner shadow for depth */
        }

        form div {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-bottom: 8px; /* Spacing below labels */
            font-weight: 500; /* Medium font weight */
            color: #34495e; /* Slightly lighter text for labels */
        }

        input[type="text"],
        input[type="number"],
        select {
            padding: 12px; /* More padding for inputs */
            border: 1px solid #c0c4cc; /* Medium border color */
            border-radius: 6px; /* Slightly rounded input fields */
            font-size: 1rem; /* Standard font size */
            color: #333;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        input[type="text"]:focus,
        input[type="number"]:focus,
        select:focus {
            border-color: #4a90e2; /* Blue focus border */
            box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2); /* Light blue glow on focus */
            outline: none; /* Remove default outline */
        }

        /* Button styling */
        button {
            padding: 12px 20px; /* More padding for buttons */
            border: none;
            border-radius: 6px; /* Rounded button corners */
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600; /* Bolder button text */
            transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        button[type="submit"] {
            background-color: #2ecc71; /* Green submit button */
            color: white;
            grid-column: span 2; /* Span two columns in the grid */
            justify-self: center; /* Center the button in its grid area */
            width: fit-content; /* Fit content width */
            padding: 12px 30px; /* More horizontal padding for submit button */
        }
        button[type="submit"]:hover {
            background-color: #27ae60; /* Darker green on hover */
            transform: translateY(-2px); /* Slight lift effect */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        button[type="submit"]:active {
            transform: translateY(0);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }


        /* Table styling */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 25px;
            background-color: #ffffff;
            border-radius: 8px; /* Rounded table corners */
            overflow: hidden; /* Ensures rounded corners apply to content */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        th, td {
            padding: 15px; /* More padding in table cells */
            text-align: left;
            border-bottom: 1px solid #f0f2f5; /* Lighter border for rows */
        }

        th {
            background-color: #4a90e2; /* Blue header */
            color: white;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.9rem;
        }

        tr:nth-child(even) {
            background-color: #f7f9fc; /* Light striped rows */
        }

        tr:hover {
            background-color: #eef5fd; /* Subtle highlight on row hover */
        }

        td button {
            margin-right: 8px; /* Spacing between action buttons */
            padding: 8px 15px; /* Smaller padding for action buttons */
            font-size: 0.9rem;
            box-shadow: none; /* No shadow on these buttons */
        }
        td button:last-child {
            margin-right: 0; /* No margin on the last button */
        }

        td button:nth-child(1) { /* Editar (Edit) button */
            background-color: #ffc107; /* Yellow */
            color: #333;
        }
        td button:nth-child(1):hover {
            background-color: #e0a800; /* Darker yellow on hover */
        }

        td button:nth-child(2) { /* Excluir (Delete) button */
            background-color: #e74c3c; /* Red */
            color: white;
        }
        td button:nth-child(2):hover {
            background-color: #c0392b; /* Darker red on hover */
        }

        /* Horizontal rule styling */
        hr {
            border: none;
            border-top: 1px solid #dcdfe6;
            margin: 40px 0;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .container {
                padding: 20px;
                margin: 10px;
            }
            form {
                grid-template-columns: 1fr; /* Stack inputs vertically on small screens */
                padding: 15px;
            }
            button[type="submit"] {
                grid-column: span 1; /* Submit button spans full width on small screens */
                width: 100%;
            }
            table, thead, tbody, th, td, tr {
                display: block; /* Make table elements block for stacking */
            }
            thead tr {
                position: absolute;
                top: -9999px;
                left: -9999px; /* Hide table headers visually but keep for screen readers */
            }
            tr {
                border: 1px solid #ddd;
                margin-bottom: 15px;
                border-radius: 8px;
                overflow: hidden;
            }
            td {
                border: none;
                position: relative;
                padding-left: 50%; /* Space for pseudo-element labels */
                text-align: right; /* Align content to the right */
            }
            td:before {
                /* Create pseudo-elements for labels from th text */
                position: absolute;
                top: 0;
                left: 6px;
                width: 45%;
                padding-right: 10px;
                white-space: nowrap;
                text-align: left;
                font-weight: bold;
                color: #555;
            }
            /* Label mapping for pseudo-elements */
            td:nth-of-type(1):before { content: "Código:"; }
            td:nth-of-type(2):before { content: "Nome:"; }
            td:nth-of-type(3):before { content: "Categoria:"; }
            td:nth-of-type(4):before { content: "Quantidade:"; }
            td:nth-of-type(5):before { content: "Localização:"; }
            td:nth-of-type(6):before { content: "Ações:"; }

            td:last-of-type {
                text-align: center; /* Center action buttons */
                padding-top: 15px;
                padding-bottom: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Sistema de Gestão de Estoque</h1>

        <h2>Adicionar/Editar Item</h2>
        <form id="item-form">
            <div>
                <label for="codigo">Código:</label>
                <input type="text" id="codigo" required autocomplete="off">
            </div>
            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" required autocomplete="off">
            </div>
            <div>
                <label for="categoria">Categoria:</label>
                <input type="text" id="categoria" required autocomplete="off">
            </div>
            <div>
                <label for="quantidade">Quantidade:</label>
                <input type="number" id="quantidade" required min="0" autocomplete="off">
            </div>
            <div>
                <label for="localizacao">Localização:</label>
                <input type="text" id="localizacao" required autocomplete="off">
            </div>
            <button type="submit">Salvar Item</button>
        </form>

        <hr>

        <h2>Itens em Estoque</h2>
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Quantidade</th>
                    <th>Localização</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody id="estoque-lista">
                <!-- Inventory items will be rendered here by JavaScript -->
            </tbody>
        </table>
    </div>

    <script>
        // Get references to the form and the table body
        const form = document.getElementById('item-form');
        const lista = document.getElementById('estoque-lista');

        // Initialize 'itens' array from localStorage.
        // If 'estoque' item doesn't exist in localStorage, it defaults to an empty array.
        let itens = JSON.parse(localStorage.getItem('estoque')) || [];

        /**
         * Renders the inventory table based on the current 'itens' array.
         * It clears the existing table rows and then creates new rows for each item.
         */
        function renderizarTabela() {
            lista.innerHTML = ''; // Clear all existing rows to prevent duplicates
            itens.forEach((item, index) => {
                // Create a table row (<tr>) for each item
                const row = `
                    <tr>
                        <td>${item.codigo}</td>
                        <td>${item.nome}</td>
                        <td>${item.categoria}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.localizacao}</td>
                        <td>
                            <!-- Edit button, calls editarItem with the item's index -->
                            <button onclick="editarItem(${index})">Editar</button>
                            <!-- Remove button, calls removerItem with the item's index -->
                            <button onclick="removerItem(${index})">Excluir</button>
                        </td>
                    </tr>
                `;
                lista.innerHTML += row; // Add the new row to the table body
            });
        }

        /**
         * Event listener for the form submission.
         * Handles adding new items or (implicitly) updating items after editing.
         */
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission behavior (page reload)

            // Create an item object from the form input values
            const item = {
                codigo: document.getElementById('codigo').value,
                nome: document.getElementById('nome').value,
                categoria: document.getElementById('categoria').value,
                quantidade: parseInt(document.getElementById('quantidade').value), // Convert quantity to an integer
                localizacao: document.getElementById('localizacao').value
            };

            // Add the new item to the 'itens' array
            itens.push(item);
            // Save the updated 'itens' array to localStorage after converting it to a JSON string
            localStorage.setItem('estoque', JSON.stringify(itens));
            form.reset(); // Clear all form fields
            renderizarTabela(); // Re-render the table to show the newly added/updated item
        });

        /**
         * Removes an item from the 'itens' array based on its index.
         * @param {number} index - The index of the item to remove.
         */
        function removerItem(index) {
            // Use splice to remove 1 element at the given index
            itens.splice(index, 1);
            // Update localStorage after removal
            localStorage.setItem('estoque', JSON.stringify(itens));
            renderizarTabela(); // Re-render the table to reflect the removal
        }

        /**
         * Populates the form fields with the data of an item selected for editing.
         * It also removes the item from the array so that when the form is submitted,
         * it's effectively replaced with the (potentially modified) data.
         * @param {number} index - The index of the item to edit.
         */
        function editarItem(index) {
            const item = itens[index]; // Get the item object at the specified index

            // Populate the form fields with the item's data
            document.getElementById('codigo').value = item.codigo;
            document.getElementById('nome').value = item.nome;
            document.getElementById('categoria').value = item.categoria;
            document.getElementById('quantidade').value = item.quantidade;
            document.getElementById('localizacao').value = item.localizacao;

            // Remove the item from the array. This is done so that when the user
            // submits the form again, the item will be added as a new entry,
            // effectively replacing the old one. This simplifies the update logic.
            itens.splice(index, 1);
            // It's important to update localStorage and re-render the table immediately
            // after splicing the item, so the list visually reflects the item being "removed for edit".
            localStorage.setItem('estoque', JSON.stringify(itens));
            renderizarTabela();
        }

        // Initial call to render the table when the page loads,
        // populating it with any existing data from localStorage.
        renderizarTabela();
    </script>
</body>
</html>
