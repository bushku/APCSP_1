---
title: Song Table
comments: true
layout: base
---

<head>
    <!-- load jQuery and DataTables style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
</head>
<table id="flaskTable" class="table" style="width:100%">
    <thead id="flaskHead">
        <tr>
            <th>Name</th>
            <th>Singer</th>
            <th>Year</th>
        </tr>
    </thead>
    <tbody id="flaskBody"></tbody>
</table>

<script>
    // Define the Song class
    class Song {
        constructor(name, singer, year) {
            this.name = name;
            this.singer = singer;
            this.year = year;
        }
    }

    $(document).ready(() => {
    // Define the Song class
        class Song {
            constructor(name, singer, year) {
                this.name = name;
                this.singer = singer;
                this.year = year;
            }
        }

    // Example data
        const songs = [
            new Song("Would You go With Me", "Josh Turner", 2006),
            new Song("Brown Chicken Brown Cow", "Trace Adkins", 2010),
            new Song("Just Give Me A Reason", "P!nk", 2012)
        ];

    // Get the table body element
        const tableBody = document.getElementById("flaskBody");

    // Function to populate the table
        function populateTable(data) {
        // Clear any existing rows
            tableBody.innerHTML = "";

        // Create a row for each song
            data.forEach(song => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${song.name}</td><td>${song.singer}</td><td>${song.year}</td>`;
                tableBody.appendChild(row);
            });
        }

    // Call the function with the song data to populate the table
        populateTable(songs);

    // Initialize DataTables plugin
        $('#flaskTable').DataTable();
    });
</script>