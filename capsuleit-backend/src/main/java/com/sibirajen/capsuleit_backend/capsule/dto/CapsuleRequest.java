package com.sibirajen.capsuleit_backend.capsule.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CapsuleRequest {
    private String title;
    private String description;
    private Instant opensAt;
}