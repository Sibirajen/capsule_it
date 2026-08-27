package com.sibirajen.capsuleit_backend.capsule;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CapsuleMetaRepo extends JpaRepository<CapsuleMeta, Long> {
}
