/* =========================================================
   SMART LIBRARY - JAVASCRIPT
========================================================= */


/* =========================================================
   BOOK DATABASE
========================================================= */

const books = [

    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        category: "fantasy",
        isbn: "9780747532699",
        icon: "fa-wand-magic-sparkles",
        cover: "cover-purple",
        description:
            "A young wizard discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",

        copies: [
            {
                id: "HP-001",
                status: "issued",
                borrower: "Arun Kumar",
                phone: "919876543210",
                dueDate: "October 10, 2026"
            },
            {
                id: "HP-002",
                status: "available",
                borrower: null,
                phone: null,
                dueDate: null
            },
            {
                id: "HP-003",
                status: "available",
                borrower: null,
                phone: null,
                dueDate: null
            }
        ]
    },


    {
        id: 2,
        title: "Java Programming",
        author: "Herbert Schildt",
        category: "technology",
        isbn: "9781260440212",
        icon: "fa-code",
        cover: "cover-blue",
        description:
            "A comprehensive introduction to Java programming, covering object-oriented programming, classes, inheritance and more.",

        copies: [
            {
                id: "JAVA-001",
                status: "issued",
                borrower: "Rahul S",
                phone: "919876543211",
                dueDate: "October 10, 2026"
            },
            {
                id: "JAVA-002",
                status: "issued",
                borrower: "Priya M",
                phone: "919876543212",
                dueDate: "October 16, 2026"
            },
            {
                id: "JAVA-003",
                status: "issued",
                borrower: "Vishnu K",
                phone: "919876543213",
                dueDate: "October 21, 2026"
            }
        ]
    },


    {
        id: 3,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "fiction",
        isbn: "9780062315007",
        icon: "fa-compass",
        cover: "cover-orange",
        description:
            "A philosophical novel about a young shepherd who travels in search of a treasure and discovers the importance of following his dreams.",

        copies: [
            {
                id: "ALC-001",
                status: "available",
                borrower: null,
                phone: null,
                dueDate: null
            },
            {
                id: "ALC-002",
                status: "available",
                borrower: null,
                phone: null,
                dueDate: null
            },
            {
                id: "ALC-003",
                status: "issued",
                borrower: "Meena R",
                phone: "919876543214",
                dueDate: "October 13, 2026"
            }
        ]
    },


    {
        id: 4,
        title: "Atomic Habits",
        author: "James Clear",
        category: "self-help",
        isbn: "9780735211292",
        icon: "fa-bolt",
        cover: "cover-green",
        description:
            "A practical guide to building good habits, breaking bad ones and making small changes that lead to remarkable results.",

        copies: [
            {
                id: "ATOM-001",
                status: "available",
                borrower: null,
                phone: null,
                dueDate: null
            },
            {
                id: "ATOM-002",
                status: "issued",
                borrower: "Karthik P",
                phone: "919876543215",
                dueDate: "October 12, 2026"
            }
        ]
    },


    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "fantasy",
        isbn: "9780547928227",
        icon: "fa-mountain-sun",
        cover: "cover-dark",
        description:
            "Bilbo Baggins joins a group of dwarves on an unexpected adventure to reclaim their homeland and treasure.",

        copies: [
            {
                id: "HOB-001",
                status: "available",
                borrower: null,
                phone: null,
                dueDate: null
            },
            {
                id: "HOB-002",
                status: "issued",
                borrower: "Sanjay V",
                phone: "919876543216",
                dueDate: "October 18, 2026"
            }
        ]
    },


    {
        id: 6,
        title: "Data Structures and Algorithms",
        author: "Narasimha Karumanchi",
        category: "education",
        isbn: "9788193245279",
        icon: "fa-diagram-project",
        cover: "cover-red",
        description:
            "A practical guide to data structures and algorithms with programming examples and problem-solving techniques.",

        copies: [
            {
                id: "DSA-001",
                status: "issued",
                borrower: "Ajay R",
                phone: "919876543217",
                dueDate: "October 11, 2026"
            },
            {
                id: "DSA-002",
                status: "issued",
                borrower: "Divya S",
                phone: "919876543218",
                dueDate: "October 15, 2026"
            }
        ]
    },


    {
        id: 7,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "self-help",
        isbn: "9780857197689",
        icon: "fa-coins",
        cover: "cover-green",
        description:
            "A collection of stories exploring how people think about money, wealth and financial decisions.",

        copies: [
            {
                id: "PSY-001",
                status: "available",
                borrower: null,
                phone: null,
                dueDate: null
            }
        ]
    },


    {
        id: 8,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "fiction",
        isbn: "9780141439518",
        icon: "fa-feather",
        cover: "cover-purple",
        description:
            "Jane Austen's classic novel following Elizabeth Bennet and her relationship with the proud Mr. Darcy.",

        copies: [
            {
                id: "PP-001",
                status: "available",
                borrower: null,
                phone: null,
                dueDate: null
            },
            {
                id: "PP-002",
                status: "available",
                borrower: null,
                phone: null,
                dueDate: null
            }
        ]
    }

];


/* =========================================================
   LOCAL STORAGE
========================================================= */

let savedBooks =
    JSON.parse(localStorage.getItem("smartLibrarySaved")) || [];

let waitlist =
    JSON.parse(localStorage.getItem("smartLibraryWaitlist")) || [];

let notifications =
    JSON.parse(localStorage.getItem("smartLibraryNotifications")) || [

        {
            icon: "fa-bell",
            title: "Welcome to SmartLibrary",
            message:
                "Search a book before visiting the library.",
            time: "Just now"
        },

        {
            icon: "fa-ticket",
            title: "Join a waitlist",
            message:
                "If all copies are issued, you can join the queue.",
            time: "Just now"
        }

    ];


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active-page");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active-page");
    }


    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");

        if (item.dataset.page === pageId) {
            item.classList.add("active");
        }
    });


    if (pageId === "browse") {
        renderBooks();
    }

    if (pageId === "saved") {
        renderSavedBooks();
    }

    if (pageId === "waitlist") {
        renderWaitlist();
    }

    if (pageId === "notifications") {
        renderNotifications();
    }

    if (pageId === "home") {
        renderHome();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   LOGIN
========================================================= */

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();


        if (!email || !password) {

            showToast("Please enter email and password.");

            return;
        }


        localStorage.setItem(
            "smartLibraryLoggedIn",
            "true"
        );


        document
            .getElementById("loginPage")
            .classList.add("hidden");

        document
            .getElementById("app")
            .classList.remove("hidden");


        initializeApp();

    });


function logout() {

    localStorage.removeItem("smartLibraryLoggedIn");

    document
        .getElementById("app")
        .classList.add("hidden");

    document
        .getElementById("loginPage")
        .classList.remove("hidden");

}


function togglePassword() {

    const password =
        document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

}


function showForgotMessage() {

    alert(
        "For this college prototype, password recovery is not connected to a real email server."
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

function initializeApp() {

    updateCounts();

    renderHome();

    renderBooks();

    renderSavedBooks();

    renderWaitlist();

    renderNotifications();

}


window.addEventListener("DOMContentLoaded", function() {

    const loggedIn =
        localStorage.getItem("smartLibraryLoggedIn");

    if (loggedIn === "true") {

        document
            .getElementById("loginPage")
            .classList.add("hidden");

        document
            .getElementById("app")
            .classList.remove("hidden");

        initializeApp();

    }

});


/* =========================================================
   HOME
========================================================= */

function renderHome() {

    const container =
        document.getElementById("popularBooks");

    const popular =
        books.slice(0, 4);

    container.innerHTML =
        popular.map(book => createBookCard(book)).join("");


    renderHomeAlerts();

    updateCounts();

}


function renderHomeAlerts() {

    const container =
        document.getElementById("homeAlerts");


    if (waitlist.length === 0) {

        container.innerHTML = `

            <div class="alert-card">

                <div class="alert-icon">
                    <i class="fa-solid fa-circle-info"></i>
                </div>

                <div>
                    <strong>No active waitlists</strong>

                    <p>
                        Search an unavailable book and join its queue.
                    </p>
                </div>

            </div>

        `;

        return;
    }


    container.innerHTML =
        waitlist.map(item => {

            const book =
                books.find(b => b.id === item.bookId);

            return `

                <div class="alert-card">

                    <div class="alert-icon">
                        <i class="fa-solid fa-ticket"></i>
                    </div>

                    <div>
                        <strong>
                            ${book.title}
                        </strong>

                        <p>
                            You are #${item.position}
                            in the waiting list.
                        </p>
                    </div>

                </div>

            `;

        }).join("");

}


/* =========================================================
   BOOK CARD
========================================================= */

function createBookCard(book) {

    const available =
        book.copies.filter(
            copy => copy.status === "available"
        ).length;


    const total =
        book.copies.length;


    const isSaved =
        savedBooks.includes(book.id);


    return `

        <div class="book-card">

            <div class="book-cover ${book.cover}">

                <i class="fa-solid ${book.icon} cover-icon"></i>

                <button
                    class="save-button ${isSaved ? "saved" : ""}"
                    onclick="toggleSave(event, ${book.id})">

                    <i class="${isSaved ? "fa-solid" : "fa-regular"} fa-heart"></i>

                </button>

            </div>


            <div class="book-card-content">

                <span class="book-category">
                    ${book.category.toUpperCase()}
                </span>

                <h3>${book.title}</h3>

                <p class="book-author">
                    ${book.author}
                </p>


                <div class="book-availability">

                    <span class="availability ${
                        available > 0
                            ? "available"
                            : "unavailable"
                    }">

                        ${
                            available > 0
                                ? `● ${available} available`
                                : `● All ${total} issued`
                        }

                    </span>


                    <button
                        class="view-book-btn"
                        onclick="openBook(${book.id})">

                        View
                        <i class="fa-solid fa-arrow-right"></i>

                    </button>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   BROWSE BOOKS
========================================================= */

function renderBooks() {

    const container =
        document.getElementById("browseBooks");


    if (!container) return;


    const search =
        (
            document.getElementById("browseSearch")?.value ||
            ""
        ).toLowerCase();


    const category =
        document.getElementById("categoryFilter")?.value ||
        "all";


    const availability =
        document.getElementById("availabilityFilter")?.value ||
        "all";


    let filtered =
        books.filter(book => {

            const matchesSearch =
                book.title.toLowerCase().includes(search) ||
                book.author.toLowerCase().includes(search) ||
                book.isbn.includes(search);


            const matchesCategory =
                category === "all" ||
                book.category === category;


            const availableCount =
                book.copies.filter(
                    c => c.status === "available"
                ).length;


            const matchesAvailability =
                availability === "all" ||

                (
                    availability === "available" &&
                    availableCount > 0
                ) ||

                (
                    availability === "unavailable" &&
                    availableCount === 0
                );


            return (
                matchesSearch &&
                matchesCategory &&
                matchesAvailability
            );

        });


    if (filtered.length === 0) {

        container.innerHTML = `

            <div class="alert-card"
                 style="grid-column:1/-1">

                <div class="alert-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div>

                    <strong>
                        No books found
                    </strong>

                    <p>
                        Try another title, author or category.
                    </p>

                </div>

            </div>

        `;

        return;
    }


    container.innerHTML =
        filtered
            .map(book => createBookCard(book))
            .join("");

}


/* =========================================================
   OPEN BOOK
========================================================= */

function openBook(bookId) {

    const book =
        books.find(b => b.id === bookId);


    if (!book) return;


    const available =
        book.copies.filter(
            c => c.status === "available"
        ).length;


    const issued =
        book.copies.filter(
            c => c.status === "issued"
        ).length;


    const userWaitlist =
        waitlist.find(
            item => item.bookId === bookId
        );


    const details =
        document.getElementById("bookDetailsContent");


    details.innerHTML = `

        <div class="book-detail-card">

            <div class="book-detail-top">

                <div class="detail-cover ${book.cover}">
                    <i class="fa-solid ${book.icon}"></i>
                </div>


                <div class="detail-info">

                    <span class="book-category">
                        ${book.category.toUpperCase()}
                    </span>

                    <h1>${book.title}</h1>

                    <p class="author">
                        by ${book.author}
                    </p>


                    <p class="detail-description">
                        ${book.description}
                    </p>


                    <div class="detail-stats">

                        <div class="detail-stat">
                            <span>Total Copies</span>
                            <strong>${book.copies.length}</strong>
                        </div>

                        <div class="detail-stat">
                            <span>Available</span>
                            <strong style="color:var(--green)">
                                ${available}
                            </strong>
                        </div>

                        <div class="detail-stat">
                            <span>Issued</span>
                            <strong style="color:var(--red)">
                                ${issued}
                            </strong>
                        </div>

                        <div class="detail-stat">
                            <span>ISBN</span>
                            <strong>${book.isbn}</strong>
                        </div>

                    </div>


                    <div class="detail-actions">

                        ${
                            available === 0

                            ?

                            (

                                userWaitlist

                                ?

                                `
                                <button
                                    class="primary-btn"
                                    style="padding:0 20px"
                                    onclick="showToast('You are already in the waitlist.')">

                                    <i class="fa-solid fa-ticket"></i>
                                    #${userWaitlist.position}
                                    in Queue

                                </button>
                                `

                                :

                                `
                                <button
                                    class="primary-btn"
                                    style="padding:0 20px"
                                    onclick="joinWaitlist(${book.id})">

                                    <i class="fa-solid fa-ticket"></i>
                                    Join Waitlist

                                </button>
                                `

                            )

                            :

                            `
                            <button
                                class="primary-btn"
                                style="padding:0 20px"
                                onclick="showToast('This book is available at the library!')">

                                <i class="fa-solid fa-circle-check"></i>
                                Available Now

                            </button>
                            `
                        }


                        <button
                            class="secondary-btn"
                            onclick="toggleSave(null, ${book.id})">

                            <i class="${
                                savedBooks.includes(book.id)
                                    ? "fa-solid"
                                    : "fa-regular"
                            } fa-heart"></i>

                            ${
                                savedBooks.includes(book.id)
                                    ? "Saved"
                                    : "Save Book"
                            }

                        </button>

                    </div>

                </div>

            </div>


            <div class="detail-bottom">

                <h2>Individual Copy Status</h2>

                <div class="copy-table">

                    <div class="copy-row copy-header">

                        <span>Copy ID</span>
                        <span>Status</span>
                        <span>Borrower</span>
                        <span>Due Date</span>

                    </div>


                    ${
                        book.copies.map(copy => `

                            <div class="copy-row">

                                <strong>
                                    ${copy.id}
                                </strong>


                                <span class="
                                    copy-status
                                    ${
                                        copy.status === "available"
                                            ? "available-text"
                                            : "issued-text"
                                    }
                                ">

                                    ${
                                        copy.status === "available"
                                            ? "● Available"
                                            : "● Issued"
                                    }

                                </span>


                                <span>

                                    ${
                                        copy.status === "available"
                                            ? "—"
                                            : copy.borrower
                                    }

                                </span>


                                <span>

                                    ${
                                        copy.status === "available"
                                            ? "—"
                                            : copy.dueDate
                                    }

                                </span>

                            </div>

                        `).join("")
                    }

                </div>


                ${
                    available === 0

                    ?

                    `

                    <div class="info-banner"
                         style="margin-top:25px">

                        <div class="info-banner-icon">
                            <i class="fa-solid fa-clock"></i>
                        </div>

                        <div>

                            <strong>
                                All copies are currently issued
                            </strong>

                            <p>
                                The earliest expected return is
                                ${getEarliestReturn(book)}.
                                You can join the waiting list or
                                contact a current borrower if permitted.
                            </p>

                        </div>

                    </div>

                    `

                    : ""

                }


                ${
                    issued > 0

                    ?

                    `

                    <h2 style="margin-top:30px">
                        Contact a Current Borrower
                    </h2>

                    <p style="color:var(--muted);
                              font-size:12px;
                              margin-bottom:15px">

                        Need the book urgently?
                        You can prepare a polite request for a
                        current borrower.

                    </p>


                    <div class="copy-table">

                        ${
                            book.copies

                                .filter(c => c.status === "issued")

                                .map(copy => `

                                    <div class="copy-row">

                                        <strong>
                                            ${copy.id}
                                        </strong>

                                        <span class="issued-text">
                                            ● Issued
                                        </span>

                                        <span>
                                            ${copy.borrower}
                                        </span>

                                        <span>
                                            ${copy.dueDate}
                                        </span>

                                        <button
                                            class="secondary-btn"
                                            onclick="openContactModal(${book.id}, '${copy.id}')">

                                            <i class="fa-brands fa-whatsapp"></i>
                                            Contact

                                        </button>

                                    </div>

                                `)
                                .join("")
                        }

                    </div>

                    <p class="privacy-note">
                        Contact details should only be displayed
                        when permitted by the library and with
                        appropriate member consent.
                    </p>

                    `

                    : ""

                }

            </div>

        </div>

    `;


    showPage("bookDetails");

}


/* =========================================================
   EARLIEST RETURN
========================================================= */

function getEarliestReturn(book) {

    const issuedCopies =
        book.copies.filter(
            c => c.status === "issued"
        );


    if (issuedCopies.length === 0) {
        return "No pending returns";
    }


    return issuedCopies[0].dueDate;
}


/* =========================================================
   WAITLIST
========================================================= */

function joinWaitlist(bookId) {

    const book =
        books.find(b => b.id === bookId);


    if (!book) return;


    const alreadyJoined =
        waitlist.some(
            item => item.bookId === bookId
        );


    if (alreadyJoined) {

        showToast(
            "You are already in this waiting list."
        );

        return;
    }


    const position =
        Math.floor(Math.random() * 4) + 2;


    waitlist.push({

        bookId: bookId,

        position: position,

        joinedDate: new Date().toLocaleDateString()

    });


    localStorage.setItem(
        "smartLibraryWaitlist",
        JSON.stringify(waitlist)
    );


    notifications.unshift({

        icon: "fa-ticket",

        title: "Waitlist joined",

        message:
            `You joined the waiting list for "${book.title}". Your current position is #${position}.`,

        time: "Just now"

    });


    localStorage.setItem(
        "smartLibraryNotifications",
        JSON.stringify(notifications)
    );


    updateCounts();

    renderWaitlist();

    renderHomeAlerts();

    showToast(
        `Joined waitlist. Your position is #${position}.`
    );

}


/* =========================================================
   RENDER WAITLIST
========================================================= */

function renderWaitlist() {

    const container =
        document.getElementById("waitlistContainer");


    if (!container) return;


    if (waitlist.length === 0) {

        container.innerHTML = `

            <div class="alert-card">

                <div class="alert-icon">
                    <i class="fa-solid fa-ticket"></i>
                </div>

                <div>

                    <strong>
                        Your waitlist is empty
                    </strong>

                    <p>
                        When a book is unavailable,
                        you can join its queue from the book details page.
                    </p>

                </div>

            </div>

        `;

        return;
    }


    container.innerHTML =
        waitlist.map(item => {

            const book =
                books.find(
                    b => b.id === item.bookId
                );


            const progress =
                Math.max(
                    20,
                    100 - item.position * 12
                );


            return `

                <div class="waitlist-card">

                    <div class="
                        waitlist-mini-cover
                        ${book.cover}
                    ">

                        <i class="
                            fa-solid
                            ${book.icon}
                        "></i>

                    </div>


                    <div>

                        <span class="book-category">
                            ${book.category.toUpperCase()}
                        </span>

                        <h3>
                            ${book.title}
                        </h3>

                        <p>
                            ${book.author}
                        </p>


                        <div class="queue-progress">

                            <div style="
                                width:${progress}%
                            "></div>

                        </div>


                        <p style="margin-top:7px">

                            Expected earliest return:
                            <strong>
                                ${getEarliestReturn(book)}
                            </strong>

                        </p>

                    </div>


                    <div class="queue-position">

                        <span>
                            YOUR POSITION
                        </span>

                        <strong>
                            #${item.position}
                        </strong>

                        <button
                            class="text-btn"
                            onclick="removeWaitlist(${book.id})">

                            Leave queue

                        </button>

                    </div>

                </div>

            `;

        }).join("");

}


/* =========================================================
   REMOVE WAITLIST
========================================================= */

function removeWaitlist(bookId) {

    waitlist =
        waitlist.filter(
            item => item.bookId !== bookId
        );


    localStorage.setItem(
        "smartLibraryWaitlist",
        JSON.stringify(waitlist)
    );


    updateCounts();

    renderWaitlist();

    renderHomeAlerts();

    showToast("Removed from waiting list.");

}


/* =========================================================
   CONTACT BORROWER
========================================================= */

function openContactModal(bookId, copyId) {

    const book =
        books.find(
            b => b.id === bookId
        );


    if (!book) return;


    const copy =
        book.copies.find(
            c => c.id === copyId
        );


    if (!copy) return;


    const message =

`Hello ${copy.borrower}! 👋

I was looking for the book "${book.title}" in the library, but currently all copies are issued.

I noticed that you have one of the copies. Could you please let me know when you are planning to return it?

I need the book, so it would be really helpful if I could borrow it after you return it.

Thank you! 😊`;


    document.getElementById("modalContent").innerHTML = `

        <div class="contact-header">

            <div class="contact-icon">

                <i class="fa-brands fa-whatsapp"></i>

            </div>

            <div>

                <h2>Contact Current Borrower</h2>

                <p>
                    ${copy.borrower} • ${copy.id}
                </p>

            </div>

        </div>


        <strong style="font-size:12px">
            Suggested message
        </strong>


        <div class="message-preview">

            ${message.replace(/\n/g, "<br>")}

        </div>


        <button
            class="whatsapp-btn"
            onclick='openWhatsApp("${copy.phone}", ${JSON.stringify(message)})'>

            <i class="fa-brands fa-whatsapp"></i>

            Open WhatsApp

        </button>


        <p class="privacy-note">

            The website prepares the message for you.
            WhatsApp will open separately and you will decide
            whether to send it. Borrower contact should only be
            used when allowed by the library.

        </p>

    `;


    document
        .getElementById("modalOverlay")
        .classList.remove("hidden");

}


/* =========================================================
   OPEN WHATSAPP
========================================================= */

function openWhatsApp(phone, message) {

    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    document
        .getElementById("modalOverlay")
        .classList.add("hidden");

}


document
    .getElementById("modalOverlay")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeModal();
        }

    });


/* =========================================================
   SAVE BOOK
========================================================= */

function toggleSave(event, bookId) {

    if (event) {
        event.stopPropagation();
    }


    if (savedBooks.includes(bookId)) {

        savedBooks =
            savedBooks.filter(
                id => id !== bookId
            );

        showToast("Book removed from saved books.");

    } else {

        savedBooks.push(bookId);

        const book =
            books.find(b => b.id === bookId);


        notifications.unshift({

            icon: "fa-heart",

            title: "Book saved",

            message:
                `"${book.title}" has been added to your saved books.`,

            time: "Just now"

        });


        localStorage.setItem(
            "smartLibraryNotifications",
            JSON.stringify(notifications)
        );


        showToast("Book saved ❤️");

    }


    localStorage.setItem(
        "smartLibrarySaved",
        JSON.stringify(savedBooks)
    );


    updateCounts();

    renderBooks();

    renderHome();

    renderSavedBooks();

}


/* =========================================================
   SAVED BOOKS
========================================================= */

function renderSavedBooks() {

    const container =
        document.getElementById("savedBooks");


    if (!container) return;


    const saved =
        books.filter(
            book => savedBooks.includes(book.id)
        );


    if (saved.length === 0) {

        container.innerHTML = `

            <div class="alert-card"
                 style="grid-column:1/-1">

                <div class="alert-icon">

                    <i class="fa-regular fa-heart"></i>

                </div>

                <div>

                    <strong>
                        No saved books yet
                    </strong>

                    <p>
                        Save books you want to track later.
                    </p>

                </div>

            </div>

        `;

        return;
    }


    container.innerHTML =
        saved
            .map(book => createBookCard(book))
            .join("");

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function renderNotifications() {

    const container =
        document.getElementById("notificationsContainer");


    if (!container) return;


    if (notifications.length === 0) {

        container.innerHTML = `

            <div class="alert-card">

                <div class="alert-icon">
                    <i class="fa-regular fa-bell"></i>
                </div>

                <div>

                    <strong>
                        No notifications
                    </strong>

                    <p>
                        You're all caught up!
                    </p>

                </div>

            </div>

        `;

        return;
    }


    container.innerHTML =
        notifications.map(notification => `

            <div class="alert-card">

                <div class="alert-icon">

                    <i class="
                        fa-solid
                        ${notification.icon}
                    "></i>

                </div>


                <div style="flex:1">

                    <strong>
                        ${notification.title}
                    </strong>

                    <p>
                        ${notification.message}
                    </p>

                </div>


                <span style="
                    color:#aaaabd;
                    font-size:10px;
                ">

                    ${notification.time}

                </span>

            </div>

        `).join("");

}


/* =========================================================
   COUNTS
========================================================= */

function updateCounts() {

    const savedCount =
        document.getElementById("savedCount");

    const waitlistCount =
        document.getElementById("waitlistCount");

    const homeWaitlistNumber =
        document.getElementById("homeWaitlistNumber");


    if (savedCount) {
        savedCount.textContent =
            savedBooks.length;
    }


    if (waitlistCount) {
        waitlistCount.textContent =
            waitlist.length;
    }


    if (homeWaitlistNumber) {
        homeWaitlistNumber.textContent =
            waitlist.length;
    }

}


/* =========================================================
   SEARCH
========================================================= */

function globalSearchBooks(event) {

    const search =
        event.target.value.trim();


    if (event.key === "Enter" && search) {

        showPage("browse");

        const browseSearch =
            document.getElementById("browseSearch");

        browseSearch.value =
            search;

        renderBooks();

    }

}


function homeSearchBooks(event) {

    if (event.key === "Enter") {
        performHomeSearch();
    }

}


function performHomeSearch() {

    const value =
        document
            .getElementById("homeSearch")
            .value
            .trim();


    showPage("browse");


    document
        .getElementById("browseSearch")
        .value = value;


    renderBooks();

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");


    toastMessage.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}