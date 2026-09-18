package com.sibirajen.capsuleit_backend.capsule;

import com.sibirajen.capsuleit_backend.capsule.dto.CapsuleRequest;
import com.sibirajen.capsuleit_backend.capsule.dto.CapsuleResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/capsule")
public class CapsuleController {
    private final CapsuleService capsuleService;

    @Autowired
    public  CapsuleController(CapsuleService capsuleService) {
        this.capsuleService = capsuleService;
    }

    @PostMapping("")
    public ResponseEntity<CapsuleResponse> createCapsule(@RequestBody CapsuleRequest capsuleRequest) {
        return ResponseEntity.ok(capsuleService.createCapsule(capsuleRequest));
    }

    @GetMapping("/all")
    public ResponseEntity<List<CapsuleResponse>> getAllCapsules() {
        return ResponseEntity.ok(capsuleService.getAllCapsules());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CapsuleResponse> getCapsule(@PathVariable Long id) {
        return ResponseEntity.ok(capsuleService.getCapsule(id));
    }
}
