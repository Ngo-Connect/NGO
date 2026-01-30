package com.ngoconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ngoconnect.entities.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {
}
