package com.example.demo;

import com.azure.storage.blob.BlobServiceAsyncClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
import com.azure.storage.blob.BlockBlobAsyncClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.io.IOException;

@RestController
@RequestMapping("/api")
public class PictureResource {

    Logger log = LoggerFactory.getLogger(PictureResource.class);

    @Value("${AZURE_BLOB_ENDPOINT}")
    private String endpoint;

    @PostMapping("/picture")
    public Mono<Void> uploadPicture() throws IOException {
        log.debug("Configuring storage client");
        BlobServiceAsyncClient client =  new BlobServiceClientBuilder()
            .endpoint(endpoint)
            .buildAsyncClient();

        return client.createContainer("pictures")
            .doOnError((e) -> {
                log.info("Container already exists");
            })
            .flatMap(
                (clientResponse) -> {
                    log.info("Uploading picture");
                    return clientResponse
                        .value()
                        .getBlockBlobAsyncClient("picture.png")
                        .uploadFromFile("src/main/resources/image.png");
                })
            .then();
    }
}
