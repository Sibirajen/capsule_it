package com.sibirajen.capsuleit_backend.capsule.dto;

import com.sibirajen.capsuleit_backend.capsule.record.Status;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Digital time capsule response")
public class CapsuleResponse {
    @Schema(description = "Unique capsule identifier", example = "1")
    private Long id;

    @Schema(description = "Title of the capsule", example = "My 2030 Goals")
    private String title;

    @Schema(description = "Capsule description")
    private String description;

    @Schema(
            description = "Date and time when the capsule can be opened",
            example = "2030-01-01T00:00:00Z"
    )
    private Instant opensAt;

    @Schema(
            description = "Current status of the capsule",
            example = "SEALED"
    )
    private Status status;
}