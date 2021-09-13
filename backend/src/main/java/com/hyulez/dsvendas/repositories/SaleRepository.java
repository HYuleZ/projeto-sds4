package com.hyulez.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hyulez.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
