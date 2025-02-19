export async function upload(ev, callbackFn) {
  const file = ev.target.files?.[0];

  if (file) {
    const uploadPromise = new Promise((resolve, reject) => {
      const data = new FormData();
      data.set("file", file);

      fetch("/api/upload", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json()) // Ensure response is parsed properly
        .then((data) => {
          console.log("Upload response:", data); // Debugging
          if (data?.url) {
            callbackFn(data.url); // Set `bgImage` as the URL string
            resolve(data.url);
          } else {
            reject("Invalid response structure");
          }
        })
        .catch((error) => reject(error));
    });

    await toast.promise(uploadPromise, {
      loading: "Uploading...",
      success: "Uploaded!",
      error: "Upload error!",
    });
  }
}
