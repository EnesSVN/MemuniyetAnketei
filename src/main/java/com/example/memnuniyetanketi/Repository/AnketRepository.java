package com.example.memnuniyetanketi.Repository;

import com.example.memnuniyetanketi.Model.Anket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnketRepository extends JpaRepository<Anket, Long> {

    List<Anket> findByNameContainingIgnoreCase(String name);
}
