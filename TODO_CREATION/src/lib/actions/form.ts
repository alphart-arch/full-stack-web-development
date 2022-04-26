export const enhance = (form:HTMLFormElement) =>{

    const handlesubmit = async (event : Event) =>{
        event.preventDefault();
        try{
            const res=await fetch("TODO: endpoints");

        }
        catch(error){
            console.error("Could not submit the form:" , error);
        }

    };
    form.addEventListener("submit" , handlesubmit);
    return{
        destroy(){
            form.removeEventListener("submit" , handlesubmit);
        }
    }
};