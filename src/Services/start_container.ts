import Data from "../Data";

export default async function start_container(user_id:string,vm_id: string) {
    try {
        const container = Data.docker.docker.getContainer(vm_id);
        await container.start();

        console.log(`Container ${vm_id} start successfully.`);
    } catch (error) {
        console.log("error while try to start the container !");
        console.log(error)
    }
}