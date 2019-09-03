package com.mycompany.myapp.web.rest;

import com.azure.storage.blob.BlobServiceAsyncClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
import com.azure.storage.blob.BlockBlobAsyncClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api")
public class PictureResource {

    private final Logger log = LoggerFactory.getLogger(PictureResource.class);

    @Value("${AZURE_BLOB_ENDPOINT}")
    private String endpoint;

    @PostMapping("/picture")
    public void uploadPicture() throws IOException {
        BlobServiceAsyncClient client =  new BlobServiceClientBuilder()
            .endpoint(endpoint)
            .buildAsyncClient();

        client.createContainer("test").subscribe((clientResponse) -> {
            BlockBlobAsyncClient blobClient = clientResponse.value().getBlockBlobAsyncClient("HelloWorld.txt");
            blobClient.uploadFromFile("src/main/webapp/content/images/jhipster_family_member_0_head-192.png").subscribe();
        });
    }
}
