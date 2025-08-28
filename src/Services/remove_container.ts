import Data from "../Data";

export default async function remove_container(user_id:string,vm_id: string) {
    try {
        const container = await Data.docker.docker.getContainer(vm_id);
        await container.stop();
        await container.remove();
        console.log(`Container ${vm_id} delete successfully.`);
    } catch (error) {
        console.log("error while try to delete the container !");
    }
}