package sots.charactercreator.models;

public class Species {

    private int speciesId;

    public Species() {
    }

    private String speciesName;

    public Species(int speciesId, String speciesName) {
        this.speciesId = speciesId;
        this.speciesName = speciesName;
    }

    public int getSpeciesId() {
        return speciesId;
    }

    public void setSpeciesId(int speciesId) {
        this.speciesId = speciesId;
    }

    public String getSpeciesName() {
        return speciesName;
    }

    public void setSpeciesName(String speciesName) {
        this.speciesName = speciesName;
    }
}
