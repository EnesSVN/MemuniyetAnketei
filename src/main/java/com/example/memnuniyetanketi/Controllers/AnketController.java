package com.example.memnuniyetanketi.Controllers;


import com.example.memnuniyetanketi.Error.ApiError;
import com.example.memnuniyetanketi.Model.Anket;
import com.example.memnuniyetanketi.Services.AnketService;
import com.example.memnuniyetanketi.Shared.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;


@RestController
public class AnketController {

    @Autowired
    private AnketService anketService;


    @GetMapping
    public String getRoot() {
        return "index";
    }

    //@RequestMapping(value = "/anket/create", method = RequestMethod.POST)
    @PostMapping(value = "/anket/create")
    public Anket createAnket(@Valid @RequestBody Anket anket) {
        //return anket;
        Anket Yenianket = anketService.createAnket(anket);
        return Yenianket;
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiError handleValidationException (MethodArgumentNotValidException ex) {
        ApiError error = new ApiError(400, "Validation error","/anket/create");
        Map<String, String> ValidationErrors = new HashMap<>();
        for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {
            ValidationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        error.setValidationErrors(ValidationErrors);
        return error;
     }

}
