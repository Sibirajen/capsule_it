package com.sibirajen.capsuleit_backend.capsule;

import com.sibirajen.capsuleit_backend.capsule.dto.CapsuleRequest;
import com.sibirajen.capsuleit_backend.capsule.dto.CapsuleResponse;
import com.sibirajen.capsuleit_backend.capsule.record.Status;
import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CapsuleService {
    private final CapsuleMetaRepo capsuleMetaRepo;

    @Autowired
    public CapsuleService(CapsuleMetaRepo capsuleMetaRepo) {
        this.capsuleMetaRepo = capsuleMetaRepo;
    }

    public @Nullable CapsuleResponse createCapsule(CapsuleRequest capsuleRequest) {
        CapsuleMeta capsuleMeta = CapsuleMeta.builder()
                .title(capsuleRequest.getTitle())
                .description(capsuleRequest.getDescription())
                .status(Status.SEALED)
                .opensAt(capsuleRequest.getOpensAt())
                .build();

        CapsuleMeta saved = capsuleMetaRepo.save(capsuleMeta);

        return CapsuleResponse.builder()
                .id(saved.getId())
                .title(saved.getTitle())
                .description(saved.getDescription())
                .opensAt(saved.getOpensAt())
                .status(saved.getStatus())
                .createdAt(saved.getCreatedAt())
                .updatedAt(saved.getUpdatedAt())
                .build();
    }

    public @Nullable List<CapsuleResponse> getAllCapsules() {
        List<CapsuleMeta> capsuleMetaList = capsuleMetaRepo.findAll();
        List<CapsuleResponse> capsuleResponseList = new ArrayList<>();
        for(CapsuleMeta capsuleMeta: capsuleMetaList) {
            capsuleResponseList.add(CapsuleResponse.builder()
                    .id(capsuleMeta.getId())
                    .title(capsuleMeta.getTitle())
                    .description(capsuleMeta.getDescription())
                    .opensAt(capsuleMeta.getOpensAt())
                    .status(capsuleMeta.getStatus())
                    .createdAt(capsuleMeta.getCreatedAt())
                    .updatedAt(capsuleMeta.getUpdatedAt())
                    .build());
        }
        return capsuleResponseList;
    }

    public @Nullable CapsuleResponse getCapsule(Long id) {
        CapsuleMeta CapsuleMeta = capsuleMetaRepo.findById(id).orElseThrow(
                () -> new RuntimeException("Not found")
        );
        return CapsuleResponse.builder()
                .id(CapsuleMeta.getId())
                .title(CapsuleMeta.getTitle())
                .description(CapsuleMeta.getDescription())
                .opensAt(CapsuleMeta.getOpensAt())
                .status(CapsuleMeta.getStatus())
                .createdAt(CapsuleMeta.getCreatedAt())
                .updatedAt(CapsuleMeta.getUpdatedAt())
                .build();
    }
}
