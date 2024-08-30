import React, { useMemo } from 'react';
import {Checkbox, FormControlLabel, FormGroup, FormLabel, Typography} from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const ProfileInputMultiSelection = ({ value, setValue, currentField, error }) => {
    const choices = useMemo(() => {
        const map = {};
        currentField.choices.forEach((choice) => {
            map[choice.value] = choice.label;
        });
        return map;
    }, [currentField.choices]);

    const handleChange = (event) => {
        const selectedValue = event.target.name;
        const isChecked = event.target.checked;

        if (isChecked) {
            setValue([...value, selectedValue]);
        } else {
            setValue(value.filter((item) => item !== selectedValue));
        }
    };

    return (
        <>
            <FormGroup>
                <FormLabel component="legend">Multiple answers possible</FormLabel>
                {Object.entries(choices).map(([key, label]) => (
                    <FormControlLabel
                        key={key}
                        control={
                            <Checkbox
                                checked={value? value.includes(key) : false}
                                onChange={handleChange}
                                name={key}
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<RadioButtonCheckedIcon />}
                            />
                        }
                        label={label}
                    />
                ))}
            </FormGroup>
            {error && (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            )}
        </>
    );
};

export default ProfileInputMultiSelection;
