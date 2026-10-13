package com.sibirajen.capsuleit_backend.capsule;

import com.sibirajen.capsuleit_backend.capsule.dto.CapsuleRequest;
import com.sibirajen.capsuleit_backend.capsule.dto.CapsuleResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/capsule")
@Tag(name = "Capsules", description = "Capsule management APIs")
public class CapsuleController {
    private final CapsuleService capsuleService;

    @Autowired
    public  CapsuleController(CapsuleService capsuleService) {
        this.capsuleService = capsuleService;
    }

    @PostMapping("")
    @Operation(
            summary = "Create a capsule",
            description = "Creates a new digital time capsule"
    )
    public ResponseEntity<CapsuleResponse> createCapsule(@RequestBody @Valid CapsuleRequest capsuleRequest) {
        return ResponseEntity.ok(capsuleService.createCapsule(capsuleRequest));
    }

    @GetMapping("/all")
    @Operation(
            summary = "Get all capsules",
            description = "Retrieves all capsules available to the authenticated user"
    )
    public ResponseEntity<List<CapsuleResponse>> getAllCapsules() {
        return ResponseEntity.ok(capsuleService.getAllCapsules());
    }

    @GetMapping("/{id}")
    @Operation(
            summary = "Get a capsule by ID",
            description = "Retrieves the details of a specific capsule using its ID"
    )
    public ResponseEntity<CapsuleResponse> getCapsule(@PathVariable Long id) {
        return ResponseEntity.ok(capsuleService.getCapsule(id));
    }
}
