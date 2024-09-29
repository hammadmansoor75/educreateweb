import Replicate from "replicate";





//=> ["https://replicate.delivery/yhqm/A8gbZlebANWBFSU1mTWSznU...

export const generateReplicateImage = async (prompt) => {
    const replicate = new Replicate();
    const input = {
        prompt: prompt,
        aspect_ratio : '16:9',
        num_outputs : 4
    };
    const output = await replicate.run("black-forest-labs/flux-schnell", { input });
    return output;
}