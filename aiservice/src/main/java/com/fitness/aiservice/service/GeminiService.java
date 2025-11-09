package com.fitness.aiservice.service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class GeminiService {
    private final WebClient webClient;
    private final String geminiApiUrl;
    private final String geminiApiKey;

    public GeminiService(WebClient.Builder webClientBuilder,
        @Value("${gemini.api.url}") String geminiApiUrl,
        @Value("${gemini.api.key}") String geminiApiKey) {
            this.webClient = webClientBuilder.build();
            this.geminiApiUrl = geminiApiUrl;
            this.geminiApiKey = geminiApiKey;
    }

    public String getAnswer(String question) {
        Map<String, Object> requestBody = Map.of(
                "contents", new Object[] {
                        Map.of("parts", new Object[]{
                                Map.of("text", question)
                        })
                }
        );

        String response = webClient.post()
                .uri(geminiApiUrl + "?key=" + geminiApiKey) // safer than simple concatenation
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();


        return response;
    }
}
