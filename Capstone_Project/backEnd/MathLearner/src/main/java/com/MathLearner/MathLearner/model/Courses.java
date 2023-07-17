package com.MathLearner.MathLearner.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Courses {

    @Id
    private int course_id;

    @Column
    private  String course_name;


}
