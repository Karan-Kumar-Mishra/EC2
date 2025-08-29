import Docker from 'dockerode';
import { user_container_type } from '../Data/types';

export default async function create_container(new_container_info: user_container_type): Promise<string> {
    const docker = new Docker({
        socketPath: '/var/run/docker.sock'
    });

    const labels: { [label: string]: string } = {
        'traefik.enable': 'true',
        // Router configuration
        [`traefik.http.routers.${new_container_info.name}.entrypoints`]: 'hoststream-network',
        
        // Service configuration
        [`traefik.http.services.${new_container_info.name}.loadbalancer.server.port`]: '80',
        
   
    };

    const container = await docker.createContainer({
        Image: 'file-manager-backend',
        name: new_container_info.name,
        HostConfig: {
            NetworkMode: 'hoststream-network'
        },
        Labels: labels,
        // Env: [
        //     `SSH_USERNAME=${new_container_info.username || 'user'}`,
        //     `SSH_PASSWORD=${new_container_info.password || "1234"}`,
        // ]
    });
    return container.id;
}