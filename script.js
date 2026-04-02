/*
 * 1. state object to hold everything
 * 2. tile object to demarcate the available space
 *  a. location is implicit in array position, so not necessary?
 * 3. 'parent' object to hold common traits
 *  a. direction held as ENUM? NORTH, SOUTH, EAST, WEST removes ambiguity
 *  b. input sides/output sides as derived property relative to direction? transport_belt only has one output side, accepts inputs from all others by defintion, etc?
 *  c. sides of belt can be implemented later, currently concerned primarily with minimum
 *  d. DIRTY/CLEAN cached values? would help shave off recalculation unless altered by user
 * 4. 'transport_belt' has no additional properties that 'parent' does not have. collapse to become 'parent' of other types or remain distinct?
 * 5. 'belt_underground' - allows one transport belt to travel a limited distance without interacting with other belts in its path, "underground" - normally automatically links ENTER/EXIT pairs, will have to consider how to structure handling
 *  a. entrance and exit status held as enum, ENTER, EXIT
 *  b. cache location of paired entrance/exit? -normally in game placing a new exit in between entrance and old exit will overwrite link if correctly oriented. check pair on placement? check pair on calculation?
 *  c. when adding 'two lane' functionality, note that INPUT on the ENTER side is only 1.0 entering from the back, only one lane enters on either side (if oriented to travel NORTH then inputs coming from EAST and WEST would only enter from their southern lane, the northern lane is stopped cold)
 * 6. 'belt_splitter' - only 1x2 'tile' and only one with 1-2 inputs and 1-2 outputs, with sides that do not interface with others.
 *  a. how to structure? 2 'half' tiles? 1 main class and 1 that refers to main? something regarding changing how neighboring tiles are detected and routed? the selected solution will define all other problems this will have.
 *  b. the 'tiles' it occupies are by defintion in only one of two orientations, but it can face 2 ways in each. does this interface badly near the edge of the allowed 'field'?
 *
 */
