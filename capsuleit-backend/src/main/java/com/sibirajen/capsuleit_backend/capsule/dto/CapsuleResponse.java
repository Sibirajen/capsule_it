package com.sibirajen.capsuleit_backend.capsule.dto;

import com.sibirajen.capsuleit_backend.capsule.record.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CapsuleResponse {
    private Long id;
    private String title;
    private String description;
    private Instant opensAt;
    private Status status;
    protected Instant createdAt;
    protected Instant updatedAt;
}
