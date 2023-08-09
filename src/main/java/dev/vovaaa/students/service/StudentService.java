package dev.vovaaa.students.service;

import dev.vovaaa.students.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {

    public Student saveStudent(Student student);

    public List<Student> getAllStudents();
}
