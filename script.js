(function () {
    const example = document.getElementById("example");
    const cw1 = document.getElementById("cw1");
    const cw1_2 = document.getElementById("cw1_2");
    const cw1_3 = document.getElementById("cw1_3");
    const cw2 = document.getElementById("cw2");
    const cw3 = document.getElementById("cw3");
    const answer = document.getElementById("answer");

    example.addEventListener("click", function () {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((array) => {
                console.log(array);
                answer.innerHTML = JSON.stringify(array);
            });
    });

    cw1.addEventListener("click", function () {
        answer.innerHTML = null;
        const loader = document.createElement("p");
        loader.innerHTML = "Loading...";
        answer.appendChild(loader);

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((array) => {
                loader.remove();

                answer.innerHTML = null;
                const list = document.createElement("ul");
                const elements = array.map((item) => {
                    const li = document.createElement("li");

                    const title = document.createElement("h3");
                    title.innerHTML = `${item?.title}`;
                    li.appendChild(title);

                    const body = document.createElement("p");
                    body.innerHTML = `${item?.body}`;
                    li.appendChild(body);

                    return li;
                });
                list.append(...elements);
                answer.append(list);
            });
    });

    cw1_2.addEventListener("click", function () {
        const loader = document.createElement("p");
        answer.innerHTML = null;
        loader.innerHTML = "Loading...";
        answer.appendChild(loader);

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((item) => {
                loader.remove();

                answer.innerHTML = null;
                const list = document.createElement("ul");
                const elements = [item].map((item) => {
                    const li = document.createElement("li");

                    const title = document.createElement("h3");
                    title.innerHTML = `${item?.title}`;
                    li.appendChild(title);

                    const body = document.createElement("p");
                    body.innerHTML = `${item?.body}`;
                    li.appendChild(body);

                    return li;
                });
                list.append(...elements);
                answer.append(list);
            });
    });

    cw1_3.addEventListener("click", function () {
        const loader = document.createElement("p");
        answer.innerHTML = null;
        loader.innerHTML = "Processing...";
        answer.appendChild(loader);

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({ title: "Lorem ipsum", body: "Tekst w artykule.", userId: 1 }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((item) => {
                loader.remove();
                answer.innerHTML = `Created item with ID: ${item.id}`;
            });
    });

    cw2.addEventListener("click", function () {
        //TODO
    });

    cw3.addEventListener("click", function () {
        //TODO
    });
})();
