export const enhance = (form, { result }) => {
    const handlesubmit = async (event) => {
        event.preventDefault();
        try {
            const body = new FormData(form);
            const res = await fetch(form.action, {
                method: form.method,
                headers: {
                    accept: "application/json"
                },
                body
            });
            if (res.ok) {
                //console.log("API response :" , await res.json());
                result(res, form);
            }
            else {
                console.error("fetch error: ", await res.text());
            }
        }
        catch (error) {
            console.error("Could not submit the form:", error);
        }
    };
    form.addEventListener("submit", handlesubmit);
    return {
        destroy() {
            form.removeEventListener("submit", handlesubmit);
        }
    };
};
//# sourceMappingURL=form.js.map