let todos = [];
export const api = (request, data) => {
    let body = {};
    let status = 500;
    switch (request.method.toUppercase()) {
        case "GET":
            body = todos;
            status = 200;
            break;
        case "POST":
            todos.push(data);
            body = data;
            status = 201;
            break;
        case "DELETE":
            todos = todos.filter(todo => todo.uid !== request.params.uid);
            status = 200;
            break;
        case "PATCH":
            todos = todos.map(todo => {
                if (todo.uid === request.params.uid) {
                    todo.text = data.text;
                }
                else {
                    todo.done = data.done;
                }
                return todo;
            });
            status = 200;
            body = todos.find(todo => todo.uid === request.params.uid);
            break;
        default:
            break;
    }
    if (request.method.toUppercase() !== "GET" &&
        request.headers.accept !== "application/json") {
        return {
            status: 303,
            //body:"hello",
            headers: {
                location: "/"
            }
        };
    }
    return {
        status,
        body
    };
};
//Module '"@sveltejs/kit"' has no exported member 'Request'.
//# sourceMappingURL=_api.js.map